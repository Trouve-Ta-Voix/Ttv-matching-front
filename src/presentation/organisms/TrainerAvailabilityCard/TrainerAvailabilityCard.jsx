import { useEffect, useState } from "react"
import { findDay, translateTime } from "../../../services/timerange/timerange"
import CircularProgress from "@mui/material/CircularProgress"
// import Pencil from "../../../medias/icons/pencil.png"
import Trash from "../../../medias/icons/trash.png"
import UpdateAvailabilityModal from "../UpdateAvailabilityModal/UpdateAvailabilityModal"

import "./trainer-availability-card.css"

const TrainerAvailabilityCard = ({ availability, onTrashClick }) => {
    const [isUpdateAvailabilityModalOpen, setIsUpdateAvailabilityModalOpen] =
        useState(false)

    const [availabilityDay, setAvailabilityDay] = useState(null)
    useEffect(() => {
        const currentDay = findDay(availability)
        const translateStartAvailability = translateTime(
            currentDay.startMinute,
            availability.startMinute
        )
        const translateEndAvailability = translateTime(
            currentDay.startMinute,
            availability.endMinute
        )
        setAvailabilityDay({
            dayData: currentDay,
            startAvailability: translateStartAvailability,
            endAvailability: translateEndAvailability,
        })
        // eslint-disable-next-line
    }, [])
    // const openUpdateAvailabilityModal = () => {
    //     setIsUpdateAvailabilityModalOpen(true)
    // }
    const closeUpdateAvailabilityModal = () => {
        setIsUpdateAvailabilityModalOpen(false)
    }
    const handleUpdateAvailabilityArrowClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsUpdateAvailabilityModalOpen(!isUpdateAvailabilityModalOpen)
        }
    }
    const handleModifyAvailability = (data) => {}
    if (!availabilityDay) {
        return <CircularProgress />
    } else {
        return (
            <div className="trainer-availability-card">
                <p className="trainer-availability-card-day">
                    {availabilityDay.dayData.day}
                </p>
                <p className="trainer-availability-card-hours">
                    {availabilityDay.startAvailability.hours}h
                    {availabilityDay.startAvailability.minutes > 0 &&
                        availabilityDay.startAvailability.minutes}
                    -{availabilityDay.endAvailability.hours}h
                    {availabilityDay.endAvailability.minutes > 0 &&
                        availabilityDay.endAvailability.minutes}
                </p>

                <div className="trainer-availability-card-icons">
                    {/* <img
                        onClick={() => openUpdateAvailabilityModal()}
                        src={Pencil}
                        alt="pencil"
                        className="trainer-availability-card-icon trainer-availability-card-icon-pencil"
                    /> */}
                    <img
                        onClick={() => onTrashClick()}
                        src={Trash}
                        alt="trash"
                        className="trainer-availability-card-icon trainer-availability-card-icon-trash"
                    />
                </div>

                {isUpdateAvailabilityModalOpen && (
                    <UpdateAvailabilityModal
                        availabilityDay={availabilityDay}
                        onClick={handleUpdateAvailabilityArrowClick}
                        closeModal={closeUpdateAvailabilityModal}
                        updateAvailabilityModal={handleModifyAvailability}
                    />
                )}
            </div>
        )
    }
}

export default TrainerAvailabilityCard
