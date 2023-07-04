import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    getTeacherClasses,
    deleteTeacherClass,
    getTeacherSchool,
} from "../../services/api/Profile"
import { UserContext } from "../../services/context/user"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Paragraph from "../atoms/Paragraph/Paragraph"
import Arrow from "../atoms/Arrow/Arrow"
import TeacherClassCard from "../molecules/TeacherClassCard/TeacherClassCard"
import ClassAvailabilitiesWrapper from "../organisms/ClassAvailabilitiesWrapper/ClassAvailabilitiesWrapper"
import ClassesLayout from "../layouts/ClassesLayout/ClassesLayout"
import AddClassModal from "../organisms/AddClassModal/AddClassModal"

const TeacherClasses = () => {
    const { userToken } = useContext(UserContext)
    const [currentClasses, setCurrentClasses] = useState([])
    const [currentSchool, setCurrentSchool] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
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

    const fetchSchool = async () => {
        const fetchedSchool = await getTeacherSchool(userToken)

        if (fetchedSchool) {
            setCurrentSchool(fetchedSchool.response)
        }
    }
    useEffect(() => {
        if (userToken) {
            fetchSchool()
        }
        // eslint-disable-next-line
    }, [userToken])
    useEffect(() => {
        if (currentSchool) {
            console.log(currentSchool)
            fetchClasses()
        }
        // eslint-disable-next-line
    }, [currentSchool])

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
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
        fetchClasses()
    }
    const handleButtonClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false)
        }
    }
    if (currentSchool) {
        if (currentClasses.length > 0) {
            return (
                <MainLayout>
                    <Logo />
                    <Arrow
                        onClick={() => navigate("/profile")}
                        orientation="left"
                    />
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
                    <Button
                        color="blue"
                        content="Ajouter une classe"
                        onClick={openModal}
                    />
                    {isModalOpen && (
                        <AddClassModal
                            closeModal={closeModal}
                            onClick={handleButtonClick}
                            schoolName={currentSchool.name}
                        />
                    )}
                </MainLayout>
            )
        } else {
            return (
                <MainLayout>
                    <Logo />
                    <Title title="Mes classes" />
                    <Paragraph content="Renseignez ici vos classes" />
                    <SeparatorLine color="blue" />
                    <Button
                        color="blue"
                        content="Ajouter une classe"
                        onClick={openModal}
                    />
                    {isModalOpen && (
                        <AddClassModal
                            closeModal={closeModal}
                            onClick={handleButtonClick}
                            schoolName={currentSchool.name}
                            schoolAddress={currentSchool.address.currentAddress}
                        />
                    )}
                </MainLayout>
            )
        }
    }
}

export default TeacherClasses
