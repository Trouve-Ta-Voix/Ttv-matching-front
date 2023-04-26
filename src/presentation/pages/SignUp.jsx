import { useFormik } from "formik"
import { useState } from "react"
import { signUpTeacher, signUpTrainer } from "../../services/api/auth"

import Form from "../organisms/Form/Form"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Select from "../molecules/Select/Select"

const SignUp = () => {

    const [userType, setUserType] = useState("teacher") 

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phone: "",
            role: userType,
            number: "",
            street: "",
            city: "",
            zipCode: "",
            longitude: "",
            latitude: "",
            country: "",
        },
        onSubmit: async (values) => {
            if(userType === "teacher"){
                signUpTeacher(values)
            }else if(userType === "trainer"){
                signUpTrainer(values)
            }
        },
    })

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value)
    }

    return (
        <>
        <Logo position="inline"/>
        <Title title="Inscription" />
        <MainLayout>
            <Form
                onSubmit={formik.handleSubmit}
                button={{ color: "orange", content: "S'inscrire'" }}
                input={[
                    {
                        name: "email",
                        type: "email",
                        value: formik.values.email,
                        placeholder: "Entrez votre email..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "firstName",
                        type: "text",
                        value: formik.values.firstName,
                        placeholder: "Entrez votre prénom..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "lastName",
                        type: "text",
                        value: formik.values.lastName,
                        placeholder: "Entrez votre nom..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "phone",
                        type: "text",
                        value: formik.values.phone,
                        placeholder: "Entrez votre numéro de téléphone..",
                        onChange: formik.handleChange,
                    },
                    {
                        name: "password",
                        type: "password",
                        value: formik.values.password,
                        onChange: formik.handleChange,
                    },
                    userType === "trainer" && 
                    {
                        name: "number",                
                        type: "number",                
                        value: formik.values.number,                
                        placeholder: "Entrez votre numéro de rue..",                
                        onChange: formik.handleChange,            
                    },  
                ]}
            >
            <Select
                options={[
                    {value: "teacher"},
                    {value: "trainer"}
                ]}
                onChange={handleUserTypeChange}
            />
            </Form>
           
        </MainLayout>
        </>
    )
}

export default SignUp

