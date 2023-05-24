import "./incoming-event-card.css"
import { translateTime, findDay } from "../../../services/timerange/timerange"
import { useEffect, useState } from "react"

const IncomingEventCard = ({ infos, hours, trainer }) => {
    const [availabilityDay, setAvailabilityDay] = useState(null)
    useEffect(() => {
        const day = findDay(infos)
        setAvailabilityDay(day)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="incoming-event-card">
            <div className="incoming-event-card-top">
                <div className="incoming-event-card-top-left">
                    <p className="incoming-event-card-top-left-name">
                        {infos.class.school.name}
                    </p>
                    <p className="incoming-event-card-top-left-address">
                        {infos.class.school.address.currentAddress}
                    </p>
                </div>
                <div className="incoming-event-card-top-right">
                    <p className="incoming-event-card-top-right-name">
                        {infos.class.name} ({infos.class.size} élèves)
                    </p>
                    <p className="incoming-event-card-top-right-hours">
                        {
                            translateTime(
                                availabilityDay?.startMinute,
                                infos.startMinute
                            ).hours
                        }
                        h
                        {translateTime(
                            availabilityDay?.startMinute,
                            infos.startMinute
                        ).minutes > 0 &&
                            translateTime(
                                availabilityDay?.startMinute,
                                infos.startMinute
                            ).minutes}
                        -
                        {
                            translateTime(
                                availabilityDay?.startMinute,
                                infos.endMinute
                            ).hours
                        }
                        h
                        {translateTime(
                            availabilityDay?.startMinute,
                            infos.endMinute
                        ).minutes > 0 &&
                            translateTime(
                                availabilityDay?.startMinute,
                                infos.endMinute
                            ).minutes}
                    </p>
                </div>
            </div>
            <div className="incoming-event-card-bottom">
                <p className="incoming-event-card-bottom-trainer">
                    Formateur = {infos.trainer.firstName}{" "}
                    {infos.trainer.lastName}
                </p>
                <p className="incoming-event-card-bottom-teacher">
                    Enseignant = {infos.class.teacher.firstName}{" "}
                    {infos.class.teacher.lastName}
                </p>
            </div>
        </div>
    )
}

export default IncomingEventCard
