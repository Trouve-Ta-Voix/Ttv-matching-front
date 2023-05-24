import { useContext } from "react"
import { UserContext } from "../../../services/context/user"
import { useFormik } from "formik"

import { createAddress } from "../../../services/api/Profile"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Form from "../Form/Form"
import Logo from "../../atoms/Logo/Logo"
// compo fleche retour
import Button from "../../atoms/Button/Button"

import "./trainer-address-create-modal.css"

const TrainerAddressUpdateModal = ({ onClick }) => {
    const { userToken } = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            currentAddress: ""
        },
        onSubmit: async (values) => {
            // const response = await updateUserPassword(userToken, body)
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
                <Subtitle subtitle="Créer une zone d'action" />
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{
                        color: "blue",
                        content: "Valider",
                        type: "submit",
                    }}
                    inputs={[
                        {
                            name: "currentAddress",
                            label: "Adresse",
                            type: "password",
                            value: formik.values.currentAddress,
                            onChange: formik.handleChange,
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default TrainerAddressUpdateModal
