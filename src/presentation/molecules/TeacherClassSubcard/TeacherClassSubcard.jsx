import { useEffect, useState } from "react"
import { findDay, translateTime } from "../../../services/timerange/timerange"

import "./teacher-class-subcard.css"

const TeacherClassSubcard = ({ availability }) => {
    const [availabilityDay, setAvailabilityDay] = useState(null)
    useEffect(() => {
        const day = findDay(availability)
        setAvailabilityDay(day)
        // eslint-disable-next-line
    }, [])

    return (
        <li className="teacher-class-subcard">
            <p className="teacher-class-subcard-availability-day">
                {availabilityDay?.day}
            </p>
            <p className="teacher-class-subcard-availability-hours">
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
        </li>
    )
}

export default TeacherClassSubcard
