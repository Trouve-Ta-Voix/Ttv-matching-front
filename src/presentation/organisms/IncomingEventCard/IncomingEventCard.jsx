import "./incoming-event-card.css"
import { translateTime, findDay } from "../../../services/timerange/timerange"
import { useEffect, useState } from "react"
import Button from "../../atoms/Button/Button"

const IncomingEventCard = ({ event, c, selectEvent, destroyEvent }) => {
    const [availabilityDay, setAvailabilityDay] = useState(null)
    useEffect(() => {
        const day = findDay(event)
        setAvailabilityDay(day)
        // eslint-disable-next-line
    }, [])

    return (
        <div
            className={`incoming-event-card incoming-event-card-${
                event.selected ? "blue" : "orange"
            }`}
        >
            <div className="incoming-event-card-top">
                <div className="incoming-event-card-top-left">
                    <p className="incoming-event-card-top-left-name">
                        {c.school.name}
                    </p>
                    <p className="incoming-event-card-top-left-address">
                        {c.school.address.currentAddress}
                    </p>
                </div>
                <div className="incoming-event-card-top-right">
                    <p className="incoming-event-card-top-right-name">
                        {c.name} ({c.size} élèves)
                    </p>
                    <p className="incoming-event-card-top-right-hours">
                        {
                            translateTime(
                                availabilityDay?.startMinute,
                                event.startMinute
                            ).hours
                        }
                        h
                        {translateTime(
                            availabilityDay?.startMinute,
                            event.startMinute
                        ).minutes > 0 &&
                            translateTime(
                                availabilityDay?.startMinute,
                                event.startMinute
                            ).minutes}
                        -
                        {
                            translateTime(
                                availabilityDay?.startMinute,
                                event.endMinute
                            ).hours
                        }
                        h
                        {translateTime(
                            availabilityDay?.startMinute,
                            event.endMinute
                        ).minutes > 0 &&
                            translateTime(
                                availabilityDay?.startMinute,
                                event.endMinute
                            ).minutes}
                    </p>
                </div>
            </div>
            <div className="incoming-event-card-bottom">
                <p className="incoming-event-card-bottom-trainer">
                    Formateur = {event.trainer.firstName}{" "}
                    {event.trainer.lastName}
                </p>
                <p className="incoming-event-card-bottom-teacher">
                    Enseignant = {c.teacher.firstName} {c.teacher.lastName}
                </p>
            </div>
            <div>
                {!event.selected ? (
                    <Button
                        content="Activer l'évènement"
                        color="white"
                        className="incoming-event-card-bottom-cta"
                        onClick={selectEvent}
                    />
                ) : (
                    <Button
                        content="Supprimer l'évènement"
                        color="white"
                        className="incoming-event-card-bottom-cta"
                        onClick={destroyEvent}
                    />
                )}
            </div>
        </div>
    )
}

export default IncomingEventCard
