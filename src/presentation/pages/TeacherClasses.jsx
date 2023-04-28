import { useEffect, useContext, useState } from "react"
import { getTeacherClasses } from "../../services/api/Profile"
import { UserContext } from "../../services/context/user"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Logo from "../atoms/Logo/Logo"
import Paragraph from "../atoms/Paragraph/Paragraph"
import TeacherClassCard from "../molecules/TeacherClassCard/TeacherClassCard"

const TeacherClasses = () => {
    const { userToken } = useContext(UserContext)
    const [currentClasses, setCurrentClasses] = useState([])
    const fetchClasses = async () => {
        if (userToken) {
            const fetchedClasses = await getTeacherClasses(userToken)
            if (fetchedClasses) {
                const test = fetchedClasses.map((fetchedClasse) => {
                    return { ...fetchedClasse, isSelected: false }
                })
                setCurrentClasses(test)
            }
        }
    }
    useEffect(() => {
        fetchClasses()
    }, [userToken])

    const handleEyeClick = (index) => {
        const updateClasses = [...currentClasses]
        updateClasses.forEach((updateClasse) => {
            updateClasse.isSelected = false
        })
        updateClasses[index].isSelected = true
        setCurrentClasses(updateClasses)
    }

    return (
        <MainLayout>
            <Logo />
            <Title title="Mes classes" />
            <Paragraph content="Renseignez ici vos classes" />
            <SeparatorLine />
            {currentClasses?.map((currentClass, i) => {
                return (
                    <TeacherClassCard
                        isSelected={currentClass.isSelected}
                        key={currentClass.name}
                        classInfos={currentClass}
                        onClick={handleEyeClick}
                        index={i}
                    />
                )
            })}
            <Button color="blue" content="Ajouter une classe" />
        </MainLayout>
    )
}

export default TeacherClasses
