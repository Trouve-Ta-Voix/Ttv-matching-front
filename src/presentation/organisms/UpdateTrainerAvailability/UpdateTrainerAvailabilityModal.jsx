import { useContext } from "react"
import { UserContext } from "../../../services/context/user"
import { useFormik } from "formik"

import { updateUserPassword } from "../../../services/api/User"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Form from "../Form/Form"
import Logo from "../../atoms/Logo/Logo"
import Arrow from "../../atoms/Arrow/Arrow"

import "./update-trainer-availability-modal.css"

const UpdateTrainerAvailabilityModal = ({ onClick, closeModal }) => {
    const { userToken } = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            startMinute: "",
            endMinute: "",
        },
        onSubmit: async (values) => {
            if (values.startMinute && values.endMinute) {
                const body = {
                    startMinute: values.startMinute,
                    endMinute: values.endMinute,
                }
                const response = await (userToken, body)
                if (!response.message) {
                    alert("La disponibilité a été créée/modifiée")
                    closeModal()
                } else {
                    alert(
                        "Problème lors de la création/modification de la disponibilité"
                    )
                }
            } else {
                alert("Veuillez remplir tous les champs")
            }
        },
    })

    // render
    return (
        <div className="update-trainer-availability-modal" onClick={onClick}>
            <div className="box-content container">
                <Arrow onClick={onClick} orientation="left" />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Modifier mon Mot de Passe" color="blue" />
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

export default UpdateTrainerAvailabilityModal
