import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { UserContext } from "../../services/context/user"
import {
    getClassInfo,
    updateClassInfo,
    createClassAvailability,
} from "../../services/api/Classes"
import CircularProgress from "@mui/material/CircularProgress"

import MainLayout from "../layouts/MainLayout/MainLayout"
import AddAvailabilityModal from "../organisms/AddAvailabilityModal/AddAvailabilityModal"
import Title from "../atoms/Title/Title"
import Logo from "../atoms/Logo/Logo"
import Button from "../atoms/Button/Button"
import Form from "../organisms/Form/Form"

const TeacherClassSummary = () => {
    const navigate = useNavigate()
    const { userToken, userData } = useContext(UserContext)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [classData, setClassData] = useState(null)
    const { classId } = useParams()

    const formik = useFormik({
        initialValues: {
            name: "",
            size: "",
            comment: "",
        },
        onSubmit: (values) => {
            updateClassInfo(userToken, classId, values)
            alert("Vos informations ont été mises à jour")
        },
    })
    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
        // eslint-disable-next-line
    }, [userData])

    useEffect(() => {
        fetchClassInfo()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (classData) {
            formik.setValues({
                name: classData.name,
                size: classData.size,
                comment: classData.comment,
            })
        }
        // eslint-disable-next-line
    }, [classData])

    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible)
    }

    const fetchClassInfo = async () => {
        const data = await getClassInfo(userToken, classId)
        if (data) {
            setClassData(data)
        }
    }

    const createAvailability = async (body) => {
        const response = await createClassAvailability(userToken, classId, body)
        if (response.status === 200) {
            alert("La disponibilité a bien été ajoutée")
            setIsModalVisible(false)
        }
        return response.status
    }

    // render
    if (!classData) {
        return (
            <MainLayout>
                <CircularProgress />
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <Logo />
                <Title title="Modifier les informations de la classe" />
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{
                        color: "blue",
                        content: "Modifier les informations",
                    }}
                    inputs={[
                        {
                            name: "name",
                            label: "Nom",
                            type: "text",
                            value: formik.values.name,
                            placeholder: classData.name,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "size",
                            label: "Nombre d'élèves",
                            type: "number",
                            value: formik.values.size,
                            placeholder: classData.size,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "comment",
                            label: "Commentaires",
                            type: "text",
                            value: formik.values.comment,
                            placeholder: classData.comment,
                            onChange: formik.handleChange,
                        },
                    ]}
                />
                <Button
                    color="blue"
                    type="button"
                    content="Ajouter une disponibilité"
                    onClick={handleButtonClick}
                />
                {isModalVisible && (
                    <AddAvailabilityModal
                        onClick={handleButtonClick}
                        createAvailability={createAvailability}
                    />
                )}
            </MainLayout>
        )
    }
}

export default TeacherClassSummary
