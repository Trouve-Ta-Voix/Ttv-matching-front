import { useEffect, useContext, useState } from "react"
import { UserContext } from "../../services/context/user"
import { useNavigate, useParams } from "react-router-dom"

import { CircularProgress, Container, Typography } from "@mui/material"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import RoleLabel from "../atoms/RoleLabel/RoleLabel"
import Subtitle from "../atoms/Subtitle/Subtitle"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Arrow from "../atoms/Arrow/Arrow"
import RangeDistance from "../atoms/RangeDistance/RangeDistance"

import { activateEvent, deleteEvent } from "../../services/api/Events"
import { getAdminClass } from "../../services/api/Classes"
import IncomingEventCard from "../organisms/IncomingEventCard/IncomingEventCard"
import ClassCard from "../organisms/ClassCard/ClassCard"
import { doMatch } from "../../services/api/doMatch"

const AdminClass = () => {
    const navigate = useNavigate()
    const { classId } = useParams()

    const { userData, userToken } = useContext(UserContext)
    const [c, setC] = useState(null)
    const [rangeValue, setRangeValue] = useState(45)

    const getClass = async () => {
        if (userToken) {
            const c = await getAdminClass(userToken, classId)
            setC(c)
        }
    }

    const launchMatching = async () => {
        await doMatch(userToken, classId, rangeValue)
        getClass()
    }

    const selectEvent = async (eventId) => {
        await activateEvent(userToken, eventId)
        getClass()
    }

    const destroyEvent = async (eventId) => {
        await deleteEvent(userToken, eventId)
        getClass()
    }

    useEffect(() => {
        if (classId && userToken) {
            getClass()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userToken, classId])

    if (!c) {
        return (
            <MainLayout>
                <CircularProgress />
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <Logo position="inline" size="big" />
                <Arrow
                    onClick={() => {
                        navigate("/admin/classes")
                    }}
                    orientation="left"
                />
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "8px",
                        alignItems: {
                            xs: "center",
                            sm: "flex-start",
                        },
                        width: {
                            xs: "100%",
                            sm: "max-content",
                        },
                    }}
                >
                    <RoleLabel role={userData.role} />
                    <Title
                        title={`Bonjour, ${userData.firstName} ${userData.lastName}`}
                    />
                    <Button
                        content="Mon profil"
                        color="blue"
                        onClick={() => {
                            navigate("/profile")
                        }}
                        sx={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                    />
                </Container>

                <Container>
                    <Subtitle subtitle="Classe" color="blue" position="left" />
                    <SeparatorLine color="blue" size="big" />
                    <Container
                        sx={{
                            paddingLeft: "0px !important",
                            paddingRight: "0px !important",
                            paddingTop: "24px !important",
                            paddingBottom: "24px !important",
                        }}
                    >
                        <ClassCard c={c} />
                    </Container>
                </Container>

                <Container>
                    <Subtitle
                        subtitle="Évènements"
                        color="blue"
                        position="left"
                    />
                    <SeparatorLine color="blue" size="big" />
                    {c.events.length > 0 ? (
                        <Container
                            sx={{
                                display: "flex",
                                flexDirection: {
                                    sm: "column",
                                    md: "row",
                                },
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                paddingLeft: "0px !important",
                                paddingRight: "0px !important",
                                paddingTop: "24px !important",
                                paddingBottom: "24px !important",
                                gap: "24px",
                            }}
                        >
                            {c.events.map((event) => (
                                <IncomingEventCard
                                    event={event}
                                    c={c}
                                    selectEvent={() => selectEvent(event.id)}
                                    destroyEvent={() => destroyEvent(event.id)}
                                    key={event.id}
                                />
                            ))}
                        </Container>
                    ) : (
                        <Typography color="blue">
                            Il n'y a pas encore d'évènements pour cette classe.
                        </Typography>
                    )}
                </Container>

                <Container>
                    <Subtitle
                        subtitle="Matching"
                        color="blue"
                        position="left"
                    />
                    <SeparatorLine color="blue" size="big" />
                    <Container
                        sx={{
                            paddingLeft: "0px !important",
                            paddingRight: "0px !important",
                            paddingTop: "24px !important",
                            paddingBottom: "24px !important",
                        }}
                    >
                        <RangeDistance
                            value={rangeValue}
                            setValue={setRangeValue}
                        />
                        <Button
                            content="Lancer le matching"
                            color="blue"
                            onClick={() => {
                                launchMatching()
                            }}
                        />
                    </Container>
                </Container>
            </MainLayout>
        )
    }
}

export default AdminClass
