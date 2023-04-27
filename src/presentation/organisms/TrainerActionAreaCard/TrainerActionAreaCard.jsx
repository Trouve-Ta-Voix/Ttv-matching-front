import Car from "../../../medias/icons/car.png"
import Pencil from "../../../medias/icons/pencil.png"
import Trash from "../../../medias/icons/trash.png"

import "./trainer-actionarea-card.css"

const TrainerActionAreaCard = ({ hasCar, address }) => {
    return (
        <div className="trainer-actionarea-card">
            <div className="trainer-actionarea-card-text">
                {address.location}
            </div>
            <div className="trainer-actionarea-card-icons">
                {hasCar && (
                    <img
                        src={Car}
                        className="trainer-actionarea-card-icon trainer-actionarea-card-icon-car"
                        alt="car"
                    />
                )}
                <img
                    onClick={() => {
                        console.log("Modify Address")
                        // TODO: Remplacer par une redirection vers la page de modif
                    }}
                    src={Pencil}
                    alt="pencil"
                    className="trainer-actionarea-card-icon trainer-actionarea-card-icon-pencil"
                />
                <img
                    onClick={() => {
                        console.log("Delete Address")
                        // TODO: Remplacer par la suppression de l'addresse
                    }}
                    src={Trash}
                    alt="trash"
                    className="trainer-actionarea-card-icon trainer-availability-card-icon-trash"
                />
            </div>
        </div>
    )
}

export default TrainerActionAreaCard
