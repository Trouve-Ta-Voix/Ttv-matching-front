import { useContext, useState } from "react"
import { UserContext } from "../../../services/context/user"

import dayjs from "dayjs"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Logo from "../../atoms/Logo/Logo"
// compo fleche retour
import Button from "../../atoms/Button/Button"
import TimePicker from "../../atoms/TimePicker/TimePicker"
import "./add-availability-modal.css"

const AddAvailabilityModal = ({ onClick }) => {
    const { userToken } = useContext(UserContext)
    const [startAvailability, setStartAvailability] = useState(
        dayjs("2022-04-17T09:30")
    )
    const [endAvailability, setEndAvailability] = useState(
        dayjs("2022-04-17T17:30")
    )
    const handleStartHourChange = (e) => {
        setStartAvailability({ hour: e.$H, minutes: e.$m })
    }
    const handleEndHourChange = (e) => {
        setEndAvailability({ hour: e.$H, minutes: e.$m })
    }
    const handleSubmit = () => {
        console.log(startAvailability, endAvailability)
    }

    // render
    return (
        <div className="add-availability-modal">
            <div className="box-content container">
                <Button
                    content="fleche"
                    onClick={onClick}
                    color="blue"
                    type="button"
                />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Créer une disponibilité" />
                <TimePicker
                    label="Heure de Début"
                    value={startAvailability}
                    onChange={handleStartHourChange}
                />
                <TimePicker
                    label="Heure de Fin"
                    value={endAvailability}
                    onChange={handleEndHourChange}
                />
                <Button
                    color="blue"
                    onClick={handleSubmit}
                    type="button"
                    content="Valider"
                />
            </div>
        </div>
    )
}

export default AddAvailabilityModal
