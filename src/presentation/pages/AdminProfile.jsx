import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../../services/context/user"
import { updateUserInfo } from "../../services/api/User"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

import CircularProgress from "@mui/material/CircularProgress"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Form from "../organisms/Form/Form"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import UpdatePasswordModal from "../organisms/UpdatePasswordModal/UpdatePasswordModal"
import Arrow from "../atoms/Arrow/Arrow"

const AdminProfile = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { userToken, userData, setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            lastName: "",
            firstName: "",
            email: "",
            role: "",
        },

        onSubmit: async (values) => {
            const updateUser = await updateUserInfo(userToken, values)
            setUserData(updateUser)
            alert("Vos informations ont été mises à jour")
        },
    })

    useEffect(() => {
        if (userData) {
            formik.setValues({
                lastName: userData.lastName,
                firstName: userData.firstName,
                email: userData.email,
                role: userData.role,
            })
        } else {
            navigate("/")
        }

        // eslint-disable-next-line
    }, [userData])
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const handleButtonClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(!isModalOpen)
        }
    }
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
                <Logo position="inline" size="big" />
                <Arrow
                    onClick={() => navigate("/profile")}
                    orientation="left"
                />
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
                    ]}
                />
                <Button
                    type="button"
                    color="orange"
                    content="Modifier Mot de Passe"
                    onClick={openModal}
                />
                {isModalOpen && (
                    <UpdatePasswordModal
                        onClick={handleButtonClick}
                        closeModal={closeModal}
                    />
                )}
            </MainLayout>
        )
    }
}

export default AdminProfile
