import { Link } from "react-router-dom"
import "./inactive-class-card.css"
import { useState, useEffect } from "react"
import { translateTime, findDay } from "../../../services/timerange/timerange"

const InactiveClassCard = ({ infos, onClick }) => {
    const [availabilityDay, setAvailabilityDay] = useState(null)

    useEffect(() => {
        const day = findDay(infos.availabilities[0])
        setAvailabilityDay(day)
        // eslint-disable-next-line
    }, [])

    return(
    <Link
        to={`/admin/classes/${infos.id}`}
        className="inactive-class-card"
        onClick={onClick}
    >
        <div className="inactive-class-card-left">
            <p className="inactive-class-card-left-school-name">
                {infos.school.name}
            </p>
            <p className="inactive-class-card-left-school-address">
                {infos.school.address.currentAddress}
            </p>
        </div>
        <div className="inactive-class-card-right">
            <p className="inactive-class-card-left-class-name">
                {infos.name} ({infos.size} élèves)
            </p>
            <p className="inactive-class-card-left-class-name">
                {availabilityDay?.day} {
                    translateTime(
                        availabilityDay?.startMinute,
                        infos.availabilities[0].startMinute
                    ).hours
                }
                h
                {translateTime(
                    availabilityDay?.startMinute,
                    infos.availabilities[0].startMinute
                ).minutes > 0 &&
                    translateTime(
                        availabilityDay?.startMinute,
                        infos.availabilities[0].startMinute
                    ).minutes}
                -
                {
                    translateTime(
                        availabilityDay?.startMinute,
                        infos.availabilities[0].endMinute
                    ).hours
                }
                h
                {translateTime(
                    availabilityDay?.startMinute,
                    infos.availabilities[0].endMinute
                ).minutes > 0 &&
                    translateTime(
                        availabilityDay?.startMinute,
                        infos.availabilities[0].endMinute
                    ).minutes}
            </p>
            <p className="inactive-class-card-left-teacher">
                Enseignant = {infos.teacher.firstName} {infos.teacher.lastName}
            </p>
        </div>
    </Link>
    )
}

export default InactiveClassCard
