import React from "react"
import Pencil from "../../../medias/icons/pencil.png"
import Trash from "../../../medias/icons/trash.png"

import "./trainer-availability-card.css"

const TrainerAvailabilityCard = ({ day, hours }) => {
    return (
        <div className="trainer-availability-card">
            <p className="trainer-availability-card-day">{day}</p>
            <p className="trainer-availability-card-hours">{hours}</p>
            <div className="trainer-availability-card-icons">
                <img
                    onClick={() => {
                        console.log("Modify Availability")
                        // TODO: Remplacer par une redirection vers la page de modif
                    }}
                    src={Pencil}
                    alt="pencil"
                    className="trainer-availability-card-icon trainer-availability-card-icon-pencil"
                />
                <img
                    onClick={() => {
                        console.log("Delete Availability")
                        // TODO: Remplacer par la suppression de l'addresse
                    }}
                    src={Trash}
                    alt="trash"
                    className="trainer-availability-card-icon trainer-availability-card-icon-trash"
                />
            </div>
        </div>
    )
}

export default TrainerAvailabilityCard
