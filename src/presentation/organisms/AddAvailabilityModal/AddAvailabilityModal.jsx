import { useContext } from "react"
import { UserContext } from "../../../services/context/user"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Logo from "../../atoms/Logo/Logo"
// compo fleche retour
import Button from "../../atoms/Button/Button"
import TimePicker from "../../atoms/TimePicker/TimePicker"
import "./add-availability-modal.css"

const AddAvailabilityModal = ({ onClick }) => {
    const { userToken } = useContext(UserContext)

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
                <TimePicker />
            </div>
        </div>
    )
}

export default AddAvailabilityModal
