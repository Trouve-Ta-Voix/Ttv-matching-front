import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/context/user"

import CircularProgress from "@mui/material/CircularProgress"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import RoleLabel from "../atoms/RoleLabel/RoleLabel"

const Profile = () => {
    const navigate = useNavigate()

    const { userData, setUserToken, setUserData } = useContext(UserContext)

    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
    }, [userData])

    const handleLogout = () => {
        setUserToken("")
        setUserData(null)
    }

    // rendering

    if (!userData) {
        return (
            <MainLayout>
                <CircularProgress />
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <Logo />
                <RoleLabel role={userData.role} />
                <Title
                    title={`Bonjour, ${userData.firstName} ${userData.lastName}`}
                />
                <Button
                    content="Mon Profil"
                    color="blue"
                    onClick={() => navigate(`/${userData.role}/profile`)}
                />
                {userData.role === "teacher" && (
                    <Button
                        content="Mes classes"
                        color="blue"
                        onClick={() => navigate(`/${userData.role}/classes`)}
                    />
                )}
                {userData.role === "trainer" && (
                    <>
                        <Button
                            content="Mes adresses"
                            color="blue"
                            onClick={() =>
                                navigate(`/${userData.role}/adresses`)
                            }
                        />
                        <Button
                            content="Mes disponibilités"
                            color="blue"
                            onClick={() =>
                                navigate(`/${userData.role}/schedule/summary`)
                            }
                        />
                    </>
                )}
                {userData.role === "admin" && (
                    <Button
                        content="Evènements"
                        color="blue"
                        onClick={() => navigate(`/${userData.role}/events`)}
                    />
                )}
                <Button
                    content="Deconnexion"
                    color="orange"
                    onClick={handleLogout}
                />
            </MainLayout>
        )
    }
}

export default Profile
