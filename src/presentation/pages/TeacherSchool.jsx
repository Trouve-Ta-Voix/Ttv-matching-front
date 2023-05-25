import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../services/context/user"
import { Container, CircularProgress } from "@mui/material"

import AddOrModifySchoolModal from "../organisms/AddOrModifySchoolModal/AddOrModifySchoolModal"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Subtitle from "../atoms/Subtitle/Subtitle"
import Button from "../atoms/Button/Button"

import { getTeacherSchool } from "../../services/api/Profile"

const TeacherSchool = () => {
    const { userToken } = useContext(UserContext)

    const [school, setSchool] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleClickAddOrModifySchool = () => {
        setIsModalVisible(!isModalVisible)
    }

    const fetchSchool = async () => {
        setIsLoading(true)
        const fetchedSchool = await getTeacherSchool(userToken)
        if (fetchedSchool) {
            console.log(fetchedSchool)
            setSchool(fetchedSchool)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchSchool()
        // eslint-disable-next-line
    }, [userToken])

    return (
        <MainLayout>
            <Logo size="big" position="inline" />
            {isLoading ? (
                <CircularProgress />
            ) : school ? (
                <>
                    <Title title="Mon école" />
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginTop: "32px",
                        }}
                    >
                        <Subtitle
                            color="blue"
                            subtitle={`Nom: ${school?.name}`}
                        />
                        <Subtitle
                            color="blue"
                            subtitle={`Adresse: ${school?.address?.currentAddress}`}
                        />
                    </Container>
                    {/* 
                    <Button
                        onClick={() => handleClickAddOrModifySchool()}
                        content="Modifier les informations"
                        color="blue"
                    /> */}
                </>
            ) : (
                <>
                    <Subtitle
                        color="blue"
                        subtitle={`Vous n'avez pas renseigné d'école`}
                    />
                    <Button
                        onClick={() => handleClickAddOrModifySchool()}
                        content="Ajouter mon école"
                        color="blue"
                    />
                </>
            )}
            {isModalVisible && (
                <AddOrModifySchoolModal
                    open={isModalVisible}
                    handleClose={handleClickAddOrModifySchool}
                    actionType={school ? "modify" : "add"}
                />
            )}
        </MainLayout>
    )
}

export default TeacherSchool
