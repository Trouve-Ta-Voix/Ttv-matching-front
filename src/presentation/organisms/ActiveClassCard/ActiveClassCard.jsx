import { Link } from "react-router-dom"
import "./active-class-card.css"
import { useState, useEffect } from "react"
import { translateTime, findDay } from "../../../services/timerange/timerange"

const ActiveClassCard = ({ infos, hours, trainer }) => {
    const [availabilityDay, setAvailabilityDay] = useState(null)

    useEffect(() => {
        const day = findDay(infos.availabilities[0])
        setAvailabilityDay(day)
        // eslint-disable-next-line
    }, [])

    return (
        <Link to={`/admin/classes/${infos.id}`} className="active-class-card">
            <div className="active-class-card-top">
                <div className="active-class-card-top-left">
                    <p className="active-class-card-top-left-name">
                        {infos.school.name}
                    </p>
                    <p className="active-class-card-top-left-address">
                        {infos.school.address.currentAddress}
                    </p>
                </div>
                <div className="active-class-card-top-right">
                    <p className="active-class-card-top-right-name">
                        {infos.name} ({infos.size} élèves)
                    </p>
                    <p className="active-class-card-top-right-name">
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
                </div>
            </div>
            <div className="active-class-card-bottom">
                <p className="active-class-card-bottom-teacher">
                    Enseignant = {infos.teacher.firstName}{" "}
                    {infos.teacher.lastName}
                </p>
            </div>
        </Link>
    )
}

export default ActiveClassCard
