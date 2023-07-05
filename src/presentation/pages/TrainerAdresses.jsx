import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    getTrainerAdresses,
    deleteTrainerAddress,
} from "../../services/api/Profile"
import { UserContext } from "../../services/context/user"

import MainLayout from "../layouts/MainLayout/MainLayout"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import Paragraph from "../atoms/Paragraph/Paragraph"
import AvailibilityLayout from "../layouts/AvailibilityLayout/AvailibilityLayout"
import TrainerActionAreaCard from "../organisms/TrainerActionAreaCard/TrainerActionAreaCard"
import TrainerAddressCreateModal from "../organisms/TrainerAddressCreateModal/TrainerAddressCreateModal"
import Logo from "../atoms/Logo/Logo"

const TrainerAdresses = () => {
    const { userToken, userData } = useContext(UserContext)
    const [currentAddresses, setCurrentAdresses] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const navigate = useNavigate()

    const fetchAddress = async () => {
        if (userToken) {
            const fetchedAddress = await getTrainerAdresses(userToken)
            setCurrentAdresses(fetchedAddress)
        }
    }

    useEffect(() => {
        fetchAddress()
        // eslint-disable-next-line
    }, [userToken])
    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
        // eslint-disable-next-line
    }, [userData])

    const handleDeleteClick = async (id) => {
        const request = await deleteTrainerAddress(userToken, id)
        if (request.status === 200) {
            fetchAddress()
        }
    }
    const handlePenClick = (id) => {
        navigate(`./${id}`)
    }

    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <MainLayout>
            <Logo position="inline" size="big" />
            <Title title="Zones d'actions" />
            <Paragraph content="Renseignez ici vos adresses, correspondant à votre périmètre d'activité" />
            <SeparatorLine color="blue" />
            <AvailibilityLayout>
                {currentAddresses?.map((currentAddress, i) => {
                    return (
                        <TrainerActionAreaCard
                            address={currentAddress.currentAddress}
                            key={i}
                            index={currentAddress.id}
                            onTrashCanClick={handleDeleteClick}
                            onPenClick={handlePenClick}
                        />
                    )
                })}
            </AvailibilityLayout>
            <Button
                color="blue"
                content="Créer une zone d'action"
                onClick={handleButtonClick}
            />
            {isModalOpen && (
                <TrainerAddressCreateModal onClick={handleButtonClick} />
            )}
        </MainLayout>
    )
}

export default TrainerAdresses
