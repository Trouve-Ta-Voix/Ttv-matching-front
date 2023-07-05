import { Modal, Box } from "@mui/material"
import Subtitle from "../../atoms/Subtitle/Subtitle"
import TextInput from "../../molecules/TextInput/TextInput"
import AutocompleteInput from "../../molecules/Autocomplete/AutocompleteInput"
import Arrow from "../../atoms/Arrow/Arrow"

import { useContext } from "react"
import { createTeacherSchool } from "../../../services/api/Profile"
import { UserContext } from "../../../services/context/user"
import { useFormik } from "formik"
import Form from "../../organisms/Form/Form"

const AddOrModifySchoolModal = ({ school, actionType, open, closeModal }) => {
    const { userToken } = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            name: school?.name || "",
            address: school?.address || "",
        },
        onSubmit: async (values) => {
            await createTeacherSchool(userToken, {
                currentAddress: values.address,
                schoolName: values.name,
            })
            closeModal()
        },
    })
    const handleChangeAddress = (data) => {
        formik.setFieldValue("address", data)
    }

    return (
        <Modal
            sx={{
                width: "90%",
                height: "90%",
                margin: "0 auto",
            }}
            open={open}
        >
            <Box
                sx={{
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#F4EFDC",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    gap: "16px",
                }}
            >
                <Arrow orientation="left" color="blue" onClick={closeModal} />
                {actionType === "add" ? (
                    <>
                        <Subtitle subtitle="Ajouter mon école" color="blue" />
                        <Form
                            onSubmit={formik.handleSubmit}
                            button={{
                                color: "blue",
                                content: "Ajouter",
                                type: "submit",
                            }}
                            inputs={[]}
                        >
                            <TextInput
                                value={formik.values.name}
                                onChange={(e) =>
                                    formik.setFieldValue("name", e.target.value)
                                }
                                label="Nom de l'école"
                                placeholder="Nom de l'école"
                            />
                            <AutocompleteInput
                                value={formik.values.address}
                                setValue={handleChangeAddress}
                            />
                        </Form>
                    </>
                ) : actionType === "modify" ? (
                    <>
                        <Subtitle
                            subtitle={`Ecole: ${school?.name}`}
                            color="blue"
                        />
                        <Subtitle
                            subtitle={`Adresse: ${school?.address}`}
                            color="blue"
                        />
                        {/* <Subtitle subtitle="Modifier mon école" color="blue" />
                        <TextInput
                            label="Nom de l'école"
                            placeholder="Nom de l'école"
                        />
                        <AutocompleteInput value="Adresse de l'école" /> */}{" "}
                    </>
                ) : (
                    <Subtitle subtitle="Erreur" color="blue" />
                )}
            </Box>
        </Modal>
    )
}

export default AddOrModifySchoolModal
