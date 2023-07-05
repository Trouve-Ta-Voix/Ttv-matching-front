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
import Arrow from "../atoms/Arrow/Arrow"

import ActiveClassCard from "../organisms/ActiveClassCard/ActiveClassCard"
import InactiveClassCard from "../organisms/InactiveClassCard/InactiveClassCard"

import { getAdminClasses } from "../../services/api/Classes"

const AdminClasses = () => {
    const navigate = useNavigate()
    const { userData, userToken } = useContext(UserContext)
    const [inactives, setInactives] = useState([])
    const [actives, setActives] = useState([])

    const getClasses = async () => {
        if (userToken) {
            const classes = await getAdminClasses(userToken)

            const activeClasses = classes.filter((c) => {
                return c.events.find((event) => event.selected)
            })

            const inactiveClasses = classes.filter((c) => {
                return !c.events.find((event) => event.selected)
            })

            setActives(activeClasses)
            setInactives(inactiveClasses)
        }
    }

    useEffect(() => {
        getClasses()
        // eslint-disable-next-line
    }, [userToken])

    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
        // eslint-disable-next-line
    }, [userData])

    // render
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
                <Arrow
                    onClick={() => {
                        navigate("/profile")
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
                        subtitle="Classes avec évènements validés"
                        color="blue"
                        position="left"
                    />
                    <SeparatorLine color="blue" size="big" />
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: {
                                sm: "column",
                                md: "row",
                            },
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            paddingLeft: "0px !important",
                            paddingRight: "0px !important",
                            paddingTop: "24px !important",
                            paddingBottom: "24px !important",
                            gap: "24px",
                        }}
                    >
                        {actives
                            ? actives.map((c) => (
                                  <ActiveClassCard infos={c} key={c.id} />
                              ))
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
                            flexDirection: {
                                sm: "column",
                                md: "row",
                            },
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            paddingLeft: "0px !important",
                            paddingRight: "0px !important",
                            paddingTop: "24px !important",
                            paddingBottom: "24px !important",
                            gap: "24px",
                        }}
                    >
                        {inactives
                            ? inactives.map((event) => {
                                  return (
                                      <InactiveClassCard
                                          infos={event}
                                          key={event.id}
                                          //   onClick={() => {
                                          //       navigate(`./${event.id}`)
                                          //   }}
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

export default AdminClasses
