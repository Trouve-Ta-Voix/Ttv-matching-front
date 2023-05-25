import { useContext } from "react"
import { UserContext } from "../../../services/context/user"
import { useFormik } from "formik"

import { createAddress } from "../../../services/api/Profile"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import AutocompleteInput from "../../molecules/Autocomplete/AutocompleteInput"
import Arrow from "../../atoms/Arrow/Arrow"
import Form from "../Form/Form"
import Logo from "../../atoms/Logo/Logo"

import "./trainer-address-create-modal.css"

const TrainerAddressUpdateModal = ({ onClick }) => {
    const { userToken } = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            currentAddress: "",
        },
        onSubmit: async (values) => {
            await createAddress(userToken, values)
            window.location.reload()
        },
    })

    const handleChangeAddress = (data) => {
        formik.setFieldValue("currentAddress", data)
    }

    return (
        <div className="create-address-modal">
            <div className="box-content container">
                <Arrow onClick={onClick} orientation="left" />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Créer une zone d'action" color="blue"/>
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{
                        color: "blue",
                        content: "Valider",
                        type: "submit",
                    }}
                    inputs={[]}
                >
                    <AutocompleteInput
                        value={formik.values.currentAddress}
                        setValue={handleChangeAddress}
                    />
                </Form>
            </div>
        </div>
    )
}

export default TrainerAddressUpdateModal
