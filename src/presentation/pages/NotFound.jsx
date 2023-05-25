import Title from "../atoms/Title/Title"
import Logo from "../atoms/Logo/Logo"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Paragraph from "../atoms/Paragraph/Paragraph"
import Button from "../atoms/Button/Button"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <MainLayout>
            <Logo />
            <Title title="404 - Not Found" />
            <Paragraph content="La page que vous recherchez ne semble pas exister"></Paragraph>
            <Button color="orange" content="Page d'accueil" onClick={() => navigate("/")}/>
        </MainLayout>
    )
}

export default NotFound
