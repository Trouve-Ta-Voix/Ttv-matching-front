import { useContext } from "react"
import { UserContext } from "../../../services/context/user"
import { useFormik } from "formik"
import { createClass } from "../../../services/api/Classes"

import Arrow from "../../atoms/Arrow/Arrow"
import Subtitle from "../../atoms/Subtitle/Subtitle"
import Form from "../Form/Form"
import Logo from "../../atoms/Logo/Logo"

import "./add-class-modal.css"

const AddClassModal = ({ onClick, schoolName, closeModal }) => {
    const { userToken } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            className: "",
            size: 0,
            comment: "",
        },
        onSubmit: async (values) => {
            const body = {
                ...values,
                schoolName,
                currentAddress: "1 Rue de la Réunion 75020 Paris",
            }
            const response = await createClass(userToken, body)
            if (response.status === 200) {
                alert("La Classe a été créée")
                closeModal()
            } else if (response.status === 409) {
                alert("La classe existe déjà")
            } else {
                alert("Erreur Serveur, veuillez rééssayer")
            }
        },
    })

    // render
    return (
        <div className="add-class-modal" onClick={onClick}>
            <div className="box-content container">
                <Arrow orientation="left" onClick={onClick} color="blue" />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Ajouter une classe" color="blue" />
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{
                        color: "blue",
                        content: "Valider",
                        type: "submit",
                    }}
                    inputs={[
                        {
                            name: "className",
                            label: "Nom de la classe",
                            type: "string",
                            value: formik.values.className,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "size",
                            label: "Effectif",
                            type: "number",
                            value: formik.values.size,
                            onChange: formik.handleChange,
                        },
                        {
                            name: "comment",
                            label: "Commentaires",
                            type: "string",
                            value: formik.values.comment,
                            onChange: formik.handleChange,
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default AddClassModal
