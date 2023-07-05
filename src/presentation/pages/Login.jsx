import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/context/user"
import { useFormik } from "formik"
import { login } from "../../services/api/auth"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Form from "../organisms/Form/Form"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"

const Login = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { setUserToken, userData } = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            setError("")
            if (formik.values.email === "") {
                setError("Veuillez entrer votre email")
            }
            const response = await login(values)
            if (response.error) {
                console.log(response.error)
                switch (response.error) {
                    case "Internal server error":
                        setError("Erreur interne du serveur")
                        break
                    case "User not found":
                        setError("Utilisateur non trouvé")
                        break
                    case "Empty or wrong password":
                        setError("Mot de passe vide ou incorrect")
                        break
                    default:
                        setError("Erreur interne du serveur")
                }
            }
            setUserToken(response.token)
        },
    })
    useEffect(() => {
        if (userData) {
            navigate("/profile")
        }
        // eslint-disable-next-line
    }, [userData])

    return (
        <MainLayout>
            <Logo position="inline" size="big" />
            <Title title="Trouve Ta Voix" />
            <Form
                onSubmit={formik.handleSubmit}
                button={{ color: "blue", content: "Connexion" }}
                inputs={[
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
                ]}
                error={error}
            />
        </MainLayout>
    )
}

export default Login
