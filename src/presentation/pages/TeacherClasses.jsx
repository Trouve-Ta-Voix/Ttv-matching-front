import MainLayout from "../layouts/MainLayout/MainLayout"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Logo from "../atoms/Logo/Logo"
import Paragraph from "../atoms/Paragraph/Paragraph"

const TeacherClasses = () => {
    return (
        <MainLayout>
            <Logo />
            <Title title="Mes classes" />
            <Paragraph content="Renseignez ici vos classes" />
            <SeparatorLine />
            {/* bloc de classes */}
            <Button color="blue" content="Ajouter une classe" />
        </MainLayout>
    )
}

export default TeacherClasses
