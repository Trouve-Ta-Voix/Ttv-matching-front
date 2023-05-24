import Pencil from "../../../medias/icons/pencil.png"
import Trash from "../../../medias/icons/trash.png"

import "./trainer-availability-card.css"
import {
    findDay,
    translateInMinutes,
    translateTime,
} from "../../../services/timerange/timerange"
import { useEffect, useState } from "react"

const TrainerAvailabilityCard = ({ availability, modify, deletion }) => {
    const [availabilityDay, setAvailabilityDay] = useState(null)
    useEffect(() => {
        const day = findDay(availability)
        setAvailabilityDay(day)
        // eslint-disable-next-line
    }, [])
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
                    onClick={() => {
                        modify()
                    }}
                    src={Pencil}
                    alt="pencil"
                    className="trainer-availability-card-icon trainer-availability-card-icon-pencil"
                />
                <img
                    onClick={deletion}
                    src={Trash}
                    alt="trash"
                    className="trainer-availability-card-icon trainer-availability-card-icon-trash"
                />
            </div>
        </div>
    )
}

export default TrainerAvailabilityCard
