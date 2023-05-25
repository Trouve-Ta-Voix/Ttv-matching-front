import { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { useFormik } from "formik"

import {
    updateTrainerAdress,
    getTrainerAddress,
} from "../../services/api/Profile"
import { UserContext } from "../../services/context/user"

import MainLayout from "../layouts/MainLayout/MainLayout"
import AutocompleteInput from "../molecules/Autocomplete/AutocompleteInput"
import Form from "../organisms/Form/Form"
import Title from "../atoms/Title/Title"
import Paragraph from "../atoms/Paragraph/Paragraph"
import AvailibilityLayout from "../layouts/AvailibilityLayout/AvailibilityLayout"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Logo from "../atoms/Logo/Logo"

const TrainerAdresses = () => {
    const { userToken } = useContext(UserContext)
    const [currentAddress, setCurrentAddress] = useState([])
    const { id } = useParams()

    const formik = useFormik({
        initialValues: {
            currentAddress: "",
        },
        onSubmit: async (values) => {
            // eslint-disable-next-line
            const response = await updateTrainerAddress(userToken, values, id)
            window.location.reload()
        },
    })

    const fetchAddress = async () => {
        const data = await getTrainerAddress(userToken, id)
        if (data) {
            getTrainerAddress(data)
            setCurrentAddress(data)
        }
    }

    useEffect(() => {
        fetchAddress()
        // eslint-disable-next-line
    }, [userToken])

    const handleAddressChange = (data) => {
        formik.setFieldValue("currentAddress", data)
    }

    return (
        <MainLayout>
            <Logo position="inline" size="big" />
            <Title title="Modifier une disponibilité" />
            <Paragraph
                content={`Adresse actuelle : ${currentAddress.currentAddress}`}
            />
            <AvailibilityLayout>
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
                        setValue={handleAddressChange}
                    />
                </Form>
            </AvailibilityLayout>
        </MainLayout>
    )
}

export default TrainerAdresses
