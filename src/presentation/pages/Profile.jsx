import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/context/user"

const Profile = () => {
    const navigate = useNavigate()

    const { userData } = useContext(UserContext)

    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
    }, [userData])
    return <div>Profile</div>
}

export default Profile
