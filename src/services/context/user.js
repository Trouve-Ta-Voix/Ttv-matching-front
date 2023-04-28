import { createContext, useState, useEffect } from "react"
import { getUserData } from "../api/User"

const UserContext = createContext({})

const UserContextProvider = (props) => {
    const [userToken, setUserToken] = useState("")
    const [userData, setUserData] = useState(null)

    const fetchUserData = async (token) => {
        const userData = await getUserData(token)
        if (userData) {
            setUserData(userData)
        }
    }

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
            localStorage.setItem("userToken", userToken)
            fetchUserData(userToken)
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
