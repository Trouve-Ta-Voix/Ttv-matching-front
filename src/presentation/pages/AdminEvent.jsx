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

const AdminEvent = () => {
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
                </Container>
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
                <Container>
                    <Subtitle
                        subtitle="Evénements à venir"
                        color="blue"
                        position="left"
                    />
                    <SeparatorLine color="blue" size="big" />
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            height: "30vh",
                            overflowY: "scroll",
                        }}
                    ></Container>
                </Container>
                <Container>
                    <Subtitle
                        subtitle="Evénements en cours"
                        color="orange"
                        position="left"
                    />
                    <SeparatorLine color="orange" size="big" />
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            height: "30vh",
                            overflowY: "scroll",
                        }}
                    ></Container>
                </Container>
            </MainLayout>
        )
    }
}

export default AdminEvent
