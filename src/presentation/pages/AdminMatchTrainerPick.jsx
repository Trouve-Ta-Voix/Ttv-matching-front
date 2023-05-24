import { useEffect, useContext } from "react"
import { UserContext } from "../../services/context/user"
import { useNavigate } from "react-router-dom"

import { CircularProgress, Container } from "@mui/material"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import RoleLabel from "../atoms/RoleLabel/RoleLabel"
import Subtitle from "../atoms/Subtitle/Subtitle"
import SeparatorLine from "../atoms/Line/SeparatorLine"

const AdminMatchTrainerPick = () => {
    const navigate = useNavigate()
    const { userData } = useContext(UserContext)
    if (!userData) {
        return (
            <MainLayout>
                <CircularProgress />
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <Logo position="inline" size="big" />
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "8px",
                        alignItems: {
                            xs: "center",
                            sm: "flex-start",
                        },
                        width: {
                            xs: "100%",
                            sm: "max-content",
                        },
                    }}
                >
                    <RoleLabel role={userData.role} />
                    <Title
                        title={`Bonjour, ${userData.firstName} ${userData.lastName}`}
                    />
                    <Button
                        content="Mon profil"
                        color="blue"
                        onClick={() => {
                            navigate("/profile")
                        }}
                        sx={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                    />
                </Container>
            </MainLayout>
        )
    }
}

export default AdminMatchTrainerPick
