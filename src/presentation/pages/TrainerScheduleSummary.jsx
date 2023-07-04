import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/context/user"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import Logo from "../atoms/Logo/Logo"
import Arrow from "../atoms/Arrow/Arrow"
import AvailibilityLayout from "../layouts/AvailibilityLayout/AvailibilityLayout"
import TrainerAvailabilityCard from "../organisms/TrainerAvailabilityCard/TrainerAvailabilityCard"
import AddAvailabilityModal from "../organisms/AddAvailabilityModal/AddAvailabilityModal"

import {
    getTrainerAvailabilities,
    createTrainerAvailability,
    deleteTrainerAvailability,
} from "../../services/api/Profile"

const TrainerScheduleSummary = () => {
    const { userToken } = useContext(UserContext)
    const navigate = useNavigate()

    const [availabilities, setAvailabilities] = useState([])
    const [isCreateAvailabilityModalOpen, setIsCreateAvailabilityModalOpen] =
        useState(false)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (userToken) {
            setLoading(true)
            fetchTrainerAvailabilities()
            setLoading(false)
        }
        // eslint-disable-next-line
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

    // const modifyAvailability = async (values) => {
    //     const response = await modifyTrainerAvailability(
    //         userToken,
    //         currentAvailability
    //     )
    //     if (response) {
    //         fetchTrainerAvailabilities()
    //     }
    // }

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
            <Arrow onClick={() => navigate("/profile")} orientation="left" />
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
