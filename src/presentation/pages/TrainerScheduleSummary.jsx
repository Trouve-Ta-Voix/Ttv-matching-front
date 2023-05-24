import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/context/user"

import { Container } from "@mui/material"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Title from "../atoms/Title/Title"
import Arrow from "../atoms/Arrow/Arrow"
import Button from "../atoms/Button/Button"
import Logo from "../atoms/Logo/Logo"
import AvailibilityLayout from "../layouts/AvailibilityLayout/AvailibilityLayout"
import TrainerAvailabilityCard from "../organisms/TrainerAvailabilityCard/TrainerAvailabilityCard"

import {
    getTrainerAvailabilities,
    createTrainerAvailability,
    modifyTrainerAvailability,
    deleteTrainerAvailability,
} from "../../services/api/Profile"
import {
    findDay,
    translateInMinutes,
    translateTime,
} from "../../services/timerange/timerange"

const TrainerScheduleSummary = () => {
    const navigate = useNavigate()
    const { userToken, userData, setUserData } = useContext(UserContext)

    const [availabilities, setAvailabilities] = useState([])
    const [currentAvailability, setCurrentAvailability] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    ////////////  API CALLS  ////////////

    const fetchTrainerAvailabilities = async () => {
        const response = await getTrainerAvailabilities(userToken)
        if (response) {
            setAvailabilities(response)
        }
    }

    const modifyAvailability = async (values) => {
        const response = await modifyTrainerAvailability(
            userToken,
            currentAvailability
        )
        if (response) {
            fetchTrainerAvailabilities()
        }
    }

    const deleteAvailability = async (id) => {
        const response = await deleteTrainerAvailability(userToken, id)
        if (response) {
            fetchTrainerAvailabilities()
        }
    }

    useEffect(() => {
        if (userToken) {
            setLoading(true)
            fetchTrainerAvailabilities()
            setLoading(false)
        }
    }, [userToken])

    ////////////  ACTIONS ////////////

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleButtonClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(!isModalOpen)
        }
    }

    const handleModifyAvailability = (availability) => {
        setCurrentAvailability(availability)
        setIsModalOpen(true)
    }

    const handleDeleteAvailability = (id) => {
        deleteAvailability(id)
    }

    return (
        <MainLayout>
            {console.log(availabilities)}
            {console.log(currentAvailability)}
            <Logo position="inline" size="big" />
            <Arrow onClick={() => navigate("/profile")} orientation={"left"} />
            <Title title="Mes disponibilités" />
            <AvailibilityLayout>
                {loading ? (
                    <p>Chargement...</p>
                ) : !availabilities.length ? (
                    <p>Aucune disponibilité</p>
                ) : (
                    availabilities.map((availability) => {
                        return (
                            <TrainerAvailabilityCard
                                availability={availability}
                                key={availability.id}
                                modify={() =>
                                    handleModifyAvailability(availability)
                                }
                                deletion={() =>
                                    handleDeleteAvailability(availability.id)
                                }
                            />
                        )
                    })
                )}
            </AvailibilityLayout>
            <Button
                onClick={openModal}
                content="Créer une disponibilité"
                color="blue"
            />
            {isModalOpen && <p>Modal</p>}
        </MainLayout>
    )
}

export default TrainerScheduleSummary
