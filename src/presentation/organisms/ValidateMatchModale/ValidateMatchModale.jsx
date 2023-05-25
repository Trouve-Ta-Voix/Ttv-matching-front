import "./validate-match-modale.css"

import { Modal, Box, Container } from "@mui/material"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import Arrow from "../../atoms/Arrow/Arrow"
import AdminClassCard from "../AdminClassCard/AdminClassCard"
import AdminTrainerCard from "../AdminTrainerCard/AdminTrainerCard"
import Button from "../../atoms/Button/Button"
import TextInput from "../../molecules/TextInput/TextInput"

const ValidateMatchModale = ({ school, trainer, open, close }) => {
    return (
        <Modal
            open={open}
            sx={{
                width: "90%",
                height: "90%",
                margin: "0 auto",
            }}
        >
            <Box
                sx={{
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#F4EFDC",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    gap: "16px",
                }}
            >
                <Arrow onClick={close} orientation="left" />
                <Paragraph
                    content="Récapitulatif de votre évènemement"
                    color="blue"
                />
                <Container
                    sx={{
                        display: "flex",
                    }}
                >
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <p>Lycée</p>
                        <AdminClassCard
                            school={{
                                name: "Ecole de la vie",
                                address: "58 rue monge, 75015 PARIS",
                            }}
                            classInfos={"Seconde B"}
                            teacher={"M. Dupont"}
                        />
                    </Container>
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <p>Formateur.trice</p>
                        <AdminTrainerCard
                            trainer={{
                                name: "Jean Dupont",
                                availabilities: [1, 2, 3],
                            }}
                        />
                    </Container>
                </Container>
                <Container
                    sx={{
                        maxWidth: "80%",
                    }}
                >
                    <TextInput label="Ajoutez un sujet à votre évènement" />
                </Container>

                <Container
                    sx={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        content="Valider la création de l'évènement"
                        type="button"
                        color="blue"
                    />
                </Container>
            </Box>
        </Modal>
    )
}

export default ValidateMatchModale
