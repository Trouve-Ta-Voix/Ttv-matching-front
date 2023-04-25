import { createContext, useState, useEffect } from "react"
import { getUserData } from "../api/User"

const UserContext = createContext({})

const UserContextProvider = (props) => {
    const [userData, setUserData] = useState(null)
    const [userToken, setUserToken] = useState("")

    useEffect(() => {
        if (
            localStorage.getItem("userToken") &&
            localStorage.getItem("userToken").length > 0
        ) {
            const token = localStorage.getItem("userToken")
            setUserToken(token)
        } else {
            localStorage.setItem("userToken", "")
        }
    }, [])

    useEffect(() => {
        if (userToken) {
            const currentUserData = getUserData(userToken)
            if (currentUserData) {
                setUserData(currentUserData)
            } else {
                setUserData(null)
            }
        } else {
            localStorage.setItem("userToken", "")
        }
    }, [userToken])

    const value = {
        userData,
        setUserData,
        userToken,
        setUserToken,
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext }
