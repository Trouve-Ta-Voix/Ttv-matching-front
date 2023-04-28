import { useNavigate } from "react-router-dom"

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
        <>
            <Logo position="inline" />
            <MainLayout>
                <Title title="Bienvenue sur la plateforme d'inscription au parcours Trouve Ta Voix" />
                <Paragraph content="Pour vous inscrire et nous permettre de vous attribuer un(e) formateur(rice) / une classe, merci de cliquer sur votre profil" />
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
            </MainLayout>
        </>
    )
}

export default SignUp
