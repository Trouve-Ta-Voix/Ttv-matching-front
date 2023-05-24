import { useEffect, useState } from "react"
import {
    findDay,
    translateInMinutes,
    translateTime,
} from "../../../services/timerange/timerange"
import Pencil from "../../../medias/icons/pencil.png"
import Trash from "../../../medias/icons/trash.png"
import UpdateAvailabilityModal from "../UpdateAvailabilityModal/UpdateAvailabilityModal"
import "./trainer-availability-card.css"

const TrainerAvailabilityCard = ({
    availability,
    onPenClick,
    onTrashClick,
}) => {
    const [isUpdateAvailabilityModalOpen, setIsUpdateAvailabilityModalOpen] =
        useState(false)

    const [availabilityDay, setAvailabilityDay] = useState(null)
    useEffect(() => {
        const day = findDay(availability)
        setAvailabilityDay(day)
        // eslint-disable-next-line
    }, [])
    const openUpdateAvailabilityModal = () => {
        setIsUpdateAvailabilityModalOpen(true)
    }
    const closeUpdateAvailabilityModal = () => {
        setIsUpdateAvailabilityModalOpen(false)
    }
    const handleUpdateAvailabilityArrowClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsUpdateAvailabilityModalOpen(!isUpdateAvailabilityModalOpen)
        }
    }
    const handleModifyAvailability = (availability) => {}
    return (
        <div className="trainer-availability-card">
            <p className="trainer-availability-card-day">
                {availabilityDay?.day}
            </p>
            <p className="trainer-availability-card-hours">
                {
                    translateTime(
                        availabilityDay?.startMinute,
                        availability.startMinute
                    ).hours
                }
                h
                {translateTime(
                    availabilityDay?.startMinute,
                    availability.startMinute
                ).minutes > 0 &&
                    translateTime(
                        availabilityDay?.startMinute,
                        availability.startMinute
                    ).minutes}
                -
                {
                    translateTime(
                        availabilityDay?.startMinute,
                        availability.endMinute
                    ).hours
                }
                h
                {translateTime(
                    availabilityDay?.startMinute,
                    availability.endMinute
                ).minutes > 0 &&
                    translateTime(
                        availabilityDay?.startMinute,
                        availability.endMinute
                    ).minutes}
            </p>

            <div className="trainer-availability-card-icons">
                <img
                    onClick={() => openUpdateAvailabilityModal()}
                    src={Pencil}
                    alt="pencil"
                    className="trainer-availability-card-icon trainer-availability-card-icon-pencil"
                />
                <img
                    onClick={() => onTrashClick()}
                    src={Trash}
                    alt="trash"
                    className="trainer-availability-card-icon trainer-availability-card-icon-trash"
                />
            </div>
            {isUpdateAvailabilityModalOpen && (
                <UpdateAvailabilityModal
                    onClick={handleUpdateAvailabilityArrowClick}
                    closeModal={closeUpdateAvailabilityModal}
                    updateAvailabilityModal={handleModifyAvailability}
                />
            )}
        </div>
    )
}

export default TrainerAvailabilityCard
