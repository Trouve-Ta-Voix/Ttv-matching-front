import { useNavigate } from "react-router-dom"
import { Container } from "@mui/material"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Paragraph from "../atoms/Paragraph/Paragraph"
import Button from "../atoms/Button/Button"

const SignUp = () => {
    const navigate = useNavigate()
    const navigateTeacher = () => {
        navigate("./teacher")
    }
    const navigateTrainer = () => {
        navigate("./trainer")
    }

    return (
        <MainLayout>
            <Logo position="inline" size="big" />
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: {
                        xs: "12px",
                        sm: "36px",
                    },
                    padding: "10% 55px",
                }}
            >
                <Title title="Bienvenue sur la plateforme d'inscription au parcours Trouve Ta Voix" />
                <Paragraph content="Pour vous inscrire et nous permettre de vous attribuer un(e) formateur(rice) / une classe, merci de cliquer sur votre profil" />
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: {
                            xs: "center",
                            sm: "space-around",
                        },
                        gap: "12px",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                    }}
                >
                    <Button
                        content="Je suis Formateur·rice"
                        onClick={navigateTrainer}
                        color="blue"
                    />
                    <Button
                        content="Je suis Enseignant·e"
                        onClick={navigateTeacher}
                        color="blue"
                    />
                </Container>
            </Container>
        </MainLayout>
    )
}

export default SignUp
