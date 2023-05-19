import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/context/user"

import { updateUserInfo } from "../../services/api/User"
import { useFormik } from "formik"

import CircularProgress from "@mui/material/CircularProgress"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Form from "../organisms/Form/Form"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import UpdatePasswordModal from "../organisms/UpdatePasswordModal/UpdatePasswordModal"

const TeacherProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { userToken, userData, setUserData } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            lastName: "",
            firstName: "",
            email: "",
            phone: "",
            role: "",
        },

        onSubmit: async (values) => {
            const updateUser = await updateUserInfo(userToken, values)
            setUserData(updateUser)
        },
    })

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    useEffect(() => {
        if (userData) {
            formik.setValues({
                lastName: userData.lastName,
                firstName: userData.firstName,
                email: userData.email,
                phone: userData.phone,
                role: userData.role,
            })
        }
        // eslint-disable-next-line
    }, [userData])

    // render
    if (!userData) {
        return (
            <MainLayout>
                <CircularProgress />
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <Logo />
                <Title title="Profil" />
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{ color: "blue", content: "Valider" }}
                    inputs={[
                        {
                            name: "lastName",
                            label: "Nom",
                            type: "text",
                            value: formik.values.lastName,
                            placeholder: userData.lastName,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "firstName",
                            label: "Prénom",
                            type: "text",
                            placeholder: userData.firstName,
                            value: formik.values.firstName,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "email",
                            label: "E-mail",
                            type: "email",
                            placeholder: userData.email,
                            value: formik.values.email,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "phone",
                            label: "Téléphone",
                            type: "text",
                            placeholder: userData.phone,
                            value: formik.values.phone,
                            onChange: formik.handleChange,
                        },
                    ]}
                />
                <Button
                    type="button"
                    color="orange"
                    content="Modifier Mot de Passe"
                    onClick={handleButtonClick}
                />
                {isModalOpen && (
                    <UpdatePasswordModal onClick={handleButtonClick} />
                )}
            </MainLayout>
        )
    }
}

export default TeacherProfile
