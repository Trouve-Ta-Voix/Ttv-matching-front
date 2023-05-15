import { useContext } from "react"
import { UserContext } from "../../../services/context/user"
import { useFormik } from "formik"

import { updateUserPassword } from "../../../services/api/User"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Form from "../Form/Form"
import Logo from "../../atoms/Logo/Logo"
// compo fleche retour
import Button from "../../atoms/Button/Button"

import "./update-password-modal.css"

const UpdatePasswordModal = ({ onClick }) => {
    const { userToken } = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            newPasswordConfirmation: "",
        },
        onSubmit: async (values) => {
            if (values.newPassword === values.newPasswordConfirmation) {
                const body = {
                    password: values.currentPassword,
                    newPassword: values.newPassword,
                }
                const response = await updateUserPassword(userToken, body)
                if (!response.message) {
                    onClick()
                }
            } else {
                alert("Les Mots de passes ne correspondent pas")
            }
        },
    })

    // render
    return (
        <div className="update-password-modal">
            <div className="box-content container">
                <Button
                    content="fleche"
                    onClick={onClick}
                    color="blue"
                    type="button"
                />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Modifier mon Mot de Passe" />
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{
                        color: "blue",
                        content: "Valider",
                        type: "submit",
                    }}
                    inputs={[
                        {
                            name: "currentPassword",
                            label: "Mot de Passe actuel",
                            type: "password",
                            value: formik.values.currentPassword,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "newPassword",
                            label: "Nouveau Mot de Passe",
                            type: "password",
                            value: formik.values.newPassword,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "newPasswordConfirmation",
                            label: "Confirmez votre nouveau Mot de Passe",
                            type: "password",
                            value: formik.values.newPasswordConfirmation,
                            onChange: formik.handleChange,
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default UpdatePasswordModal
