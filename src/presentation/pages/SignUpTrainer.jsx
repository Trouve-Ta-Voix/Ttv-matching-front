import { useNavigate } from "react-router-dom"

import { useFormik } from "formik"
import { signUpTrainer } from "../../services/api/auth"

import MainLayout from "../layouts/MainLayout/MainLayout"
import AutocompleteInput from "../molecules/Autocomplete/AutocompleteInput"
import Form from "../organisms/Form/Form"
import Title from "../atoms/Title/Title"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Logo from "../atoms/Logo/Logo"

const SignUpTrainer = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phone: "",
            currentAddress: "",
        },
        onSubmit: async (values) => {
            if (formik.values.password === formik.values.confirmPassword) {
                if (!formik.values.currentAddress) {
                    alert("Veuillez entrer une adresse")
                    return
                }

                const response = await signUpTrainer(values)
                if (response.status === 200) {
                    alert("Votre compte a été créé")
                    navigate("/")
                } else {
                    if (response?.response[0]?.msg) {
                        switch (response.response[0].msg) {
                            case "Pseudo length isn't right":
                                alert("Vérifiez le nom et le prénom")
                            case "Invalid value":
                                alert("Vérifiez le numéro de téléphone")
                                break
                            case "Password is too short":
                                alert("Le mot de passe est trop court")
                                break
                            case "Email isn't right":
                                alert("L'email n'est pas correct")
                                break
                        }
                    } else if (response.status === 500) {
                        alert("Erreur interne du serveur")
                    } else if (response.status === 409) {
                        alert("Cet email est déjà pris")
                    }
                }
            } else {
                alert("Les mots de passe ne correspondent pas")
            }
        },
    })

    const handleAddressChange = (data) => {
        formik.setFieldValue("currentAddress", data)
    }

    return (
        <MainLayout>
            <Logo position="inline" size="big" />
            <Title title="Inscription" />
            <SeparatorLine color="blue" />
            <Form
                onSubmit={formik.handleSubmit}
                button={{ color: "blue", content: "S'inscrire" }}
                inputs={[
                    {
                        name: "firstName",
                        label: "Prénom",
                        type: "text",
                        value: formik.values.firstName,
                        placeholder: "Entrez votre prénom..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "lastName",
                        label: "Nom",
                        type: "text",
                        value: formik.values.lastName,
                        placeholder: "Entrez votre nom..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "phone",
                        label: "Téléphone",
                        type: "tel",
                        value: formik.values.phone,
                        placeholder: "Entrez votre numéro de téléphone..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "email",
                        label: "E-Mail",
                        type: "email",
                        value: formik.values.email,
                        placeholder: "Entrez votre email..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "password",
                        label: "Mot de Passe",
                        type: "password",
                        value: formik.values.password,
                        onChange: formik.handleChange,
                    },
                    {
                        name: "confirmPassword",
                        label: "Confirmer votre Mot de Passe",
                        type: "password",
                        value: formik.values.confirmPassword,
                        onChange: formik.handleChange,
                    },
                ]}
            >
                <p className="input-text-label">Adresse</p>
                <AutocompleteInput
                    value={formik.values.currentAddress}
                    setValue={handleAddressChange}
                />
            </Form>
        </MainLayout>
    )
}

export default SignUpTrainer
