import { useContext, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../../services/context/user"

import { Container } from "@mui/material"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import Logo from "../atoms/Logo/Logo"
import AvailibilityLayout from "../layouts/AvailibilityLayout/AvailibilityLayout"
import TrainerAvailabilityCard from "../organisms/TrainerAvailabilityCard/TrainerAvailabilityCard"
import AddAvailabilityModal from "../organisms/AddAvailabilityModal/AddAvailabilityModal"
import UpdateAvailabilityModal from "../organisms/UpdateAvailabilityModal/UpdateAvailabilityModal"

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
    const { trainerId } = useParams()
    const { userToken, userData, setUserData } = useContext(UserContext)

    const [availabilities, setAvailabilities] = useState([])
    const [currentAvailability, setCurrentAvailability] = useState({})
    const [isCreateAvailabilityModalOpen, setIsCreateAvailabilityModalOpen] =
        useState(false)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (userToken) {
            setLoading(true)
            fetchTrainerAvailabilities()
            setLoading(false)
        }
    }, [userToken])

    ////////////  API CALLS  ////////////

    const fetchTrainerAvailabilities = async () => {
        const response = await getTrainerAvailabilities(userToken)
        if (response) {
            setAvailabilities(response)
        }
    }
    const createAvailability = async (body) => {
        const response = await createTrainerAvailability(userToken, body)
        return response.status
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

    ////////////  ACTIONS ////////////

    const openCreateAvailabilityModal = () => {
        setIsCreateAvailabilityModalOpen(true)
    }
    const closeCreateAvailabilityModal = () => {
        setIsCreateAvailabilityModalOpen(false)
    }
    const handleCreateAvailabilityArrowClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsCreateAvailabilityModalOpen(!isCreateAvailabilityModalOpen)
        }
    }

    const handleDeleteAvailability = (id) => {
        deleteAvailability(id)
    }

    // render
    return (
        <MainLayout>
            <Logo position="inline" size="big" />
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
                                onTrashClick={() =>
                                    handleDeleteAvailability(availability.id)
                                }
                            />
                        )
                    })
                )}
            </AvailibilityLayout>
            <Button
                onClick={openCreateAvailabilityModal}
                content="Créer une disponibilité"
                color="blue"
            />
            {isCreateAvailabilityModalOpen && (
                <AddAvailabilityModal
                    onClick={handleCreateAvailabilityArrowClick}
                    createAvailability={createAvailability}
                    closeModal={closeCreateAvailabilityModal}
                    getAvailabilities={fetchTrainerAvailabilities}
                />
            )}
        </MainLayout>
    )
}

export default TrainerScheduleSummary
