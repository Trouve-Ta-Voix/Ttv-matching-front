import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    getTeacherClasses,
    deleteTeacherClass,
} from "../../services/api/Profile"
import { UserContext } from "../../services/context/user"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Paragraph from "../atoms/Paragraph/Paragraph"
import TeacherClassCard from "../molecules/TeacherClassCard/TeacherClassCard"
import ClassAvailabilitiesWrapper from "../organisms/ClassAvailabilitiesWrapper/ClassAvailabilitiesWrapper"
import ClassesLayout from "../layouts/ClassesLayout/ClassesLayout"

const TeacherClasses = () => {
    const { userToken } = useContext(UserContext)
    const [currentClasses, setCurrentClasses] = useState([])
    const navigate = useNavigate()

    const fetchClasses = async () => {
        if (userToken) {
            const fetchedClasses = await getTeacherClasses(userToken)
            if (fetchedClasses) {
                const updateClasses = fetchedClasses.map((fetchedClasse) => {
                    return { ...fetchedClasse, isSelected: false }
                })
                setCurrentClasses(updateClasses)
            }
        }
    }
    useEffect(() => {
        fetchClasses()
        // eslint-disable-next-line
    }, [userToken])

    const handleEyeClick = (index) => {
        const updateClasses = [...currentClasses]
        updateClasses.forEach((updateClasse) => {
            updateClasse.isSelected = false
        })
        updateClasses[index].isSelected = !updateClasses[index].isSelected
        setCurrentClasses(updateClasses)
    }

    const handleDeleteClick = async (id) => {
        const request = await deleteTeacherClass(userToken, id)
        if (request.status === 200) {
            fetchClasses()
        }
    }
    const handlePenClick = (classId) => {
        navigate(`./${classId}`)
    }

    return (
        <MainLayout>
            <Logo />
            <Title title="Mes classes" />
            <Paragraph content="Renseignez ici vos classes" />
            <SeparatorLine color="blue" />
            <ClassesLayout>
                {currentClasses?.map((currentClass, i) => {
                    return (
                        <TeacherClassCard
                            key={currentClass.createdAt}
                            isSelected={currentClass.isSelected}
                            classInfos={currentClass}
                            onEyeClick={handleEyeClick}
                            onTrashCanClick={handleDeleteClick}
                            onPenClick={handlePenClick}
                            index={i}
                        >
                            {currentClass.isSelected && (
                                <ClassAvailabilitiesWrapper
                                    classId={currentClass.id}
                                />
                            )}
                        </TeacherClassCard>
                    )
                })}
            </ClassesLayout>
            <Button color="blue" content="Ajouter une classe" />
        </MainLayout>
    )
}

export default TeacherClasses
