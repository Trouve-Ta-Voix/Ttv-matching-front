import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/context/user"
import { useFormik } from "formik"
import { login } from "../../services/api/auth"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Form from "../organisms/Form/Form"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"

const Login = () => {
    const navigate = useNavigate()
    const { setUserToken, userData } = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            const token = await login(values)
            setUserToken(token.token)
        },
    })
    useEffect(() => {
        if (userData) {
            navigate("/profile")
        }
    }, [userData])

    return (
        <>
            <Logo position="inline" />
            <Title title="Trouve Ta Voix" />
            <MainLayout>
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{ color: "blue", content: "Connexion" }}
                    input={[
                        {
                            name: "email",
                            type: "email",
                            value: formik.values.email,
                            placeholder: "Entrez votre email..",
                            onChange: formik.handleChange,
                        },
                        {
                            name: "password",
                            type: "password",
                            value: formik.values.password,
                            onChange: formik.handleChange,
                        },
                    ]}
                />
            </MainLayout>
        </>
    )
}

export default Login
