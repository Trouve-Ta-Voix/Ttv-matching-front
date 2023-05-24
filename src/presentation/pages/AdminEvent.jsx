import { useEffect, useContext, useState } from "react"
import { UserContext } from "../../services/context/user"
import { useNavigate } from "react-router-dom"

import { CircularProgress, Container } from "@mui/material"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import RoleLabel from "../atoms/RoleLabel/RoleLabel"
import Subtitle from "../atoms/Subtitle/Subtitle"
import SeparatorLine from "../atoms/Line/SeparatorLine"

import IncomingEventCard from "../organisms/IncomingEventCard/IncomingEventCard"
import WaitingForEventClassCard from "../organisms/WaitingForEventClassCard/WaitingForEventClassCard"

import { getInactiveEvents, getSelectedEvents } from "../../services/api/Events"

const AdminEvent = () => {
    const navigate = useNavigate()
    const { userData, userToken } = useContext(UserContext)
    const [inactives, setInactives] = useState([])
    const [actives, setActives] = useState([])

    const getAllEvents = async () => {
        if (userToken) {
            const fetchedInactives = await getInactiveEvents(userToken)
            const fetchedSelecteds = await getSelectedEvents(userToken)

            if (fetchedInactives) {
                const updateInactiveEvents = fetchedInactives.map(
                    (fetchedInactive) => {
                        return { ...fetchedInactive, isSelected: false }
                    }
                )
                setInactives(updateInactiveEvents)
            }
            if (fetchedSelecteds) {
                const updateActiveEvents = fetchedSelecteds.map(
                    (fetchedSelected) => {
                        return { ...fetchedSelected, isSelected: false }
                    }
                )
                setActives(updateActiveEvents)
            }
        }
    }

    useEffect(() => {
        getAllEvents()
        // eslint-disable-next-line
    }, [userToken])

    if (!userData) {
        return (
            <MainLayout>
                <CircularProgress />
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <Logo position="inline" size="big" />
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
                </Container>
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
                <Container>
                    <Subtitle
                        subtitle="Evénements à venir"
                        color="blue"
                        position="left"
                    />
                    <SeparatorLine color="blue" size="big" />
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            height: "30vh",
                            overflowY: "scroll",
                        }}
                    >
                        {actives
                            ? actives.map((event) => {
                                  return (
                                      <IncomingEventCard
                                          infos={event}
                                          key={event.id}
                                      />
                                  )
                              })
                            : "Wololo"}
                    </Container>
                </Container>
                <Container>
                    <Subtitle
                        subtitle="Classes en attente d’évènement"
                        color="orange"
                        position="left"
                    />
                    <SeparatorLine color="orange" size="big" />
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            height: "30vh",
                            overflowY: "scroll",
                        }}
                    >
                        {inactives
                            ? inactives.map((event) => {
                                  return (
                                      <WaitingForEventClassCard
                                          infos={event}
                                          key={event.id}
                                          onClick={() => {
                                              navigate(`./matching/${event.id}`)
                                          }}
                                      />
                                  )
                              })
                            : "Wololo"}
                    </Container>
                </Container>
            </MainLayout>
        )
    }
}

export default AdminEvent
