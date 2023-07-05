import Car from "../../../medias/icons/car.png"
import Pencil from "../../../medias/icons/pencil.png"
import Trash from "../../../medias/icons/trash.png"

import "./trainer-actionarea-card.css"

const TrainerActionAreaCard = ({
    hasCar,
    address,
    onPenClick,
    onTrashCanClick,
    index,
}) => {
    return (
        <div className="trainer-actionarea-card">
            <div className="trainer-actionarea-card-text">{address}</div>
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
                        onPenClick(index)
                    }}
                    src={Pencil}
                    alt="pencil"
                    className="trainer-actionarea-card-icon trainer-actionarea-card-icon-pencil"
                />
                <img
                    onClick={() => {
                        onTrashCanClick(index)
                    }}
                    src={Trash}
                    alt="trash"
                    className="trainer-actionarea-card-icon trainer-actionarea-card-icon-trash"
                />
            </div>
        </div>
    )
}

export default TrainerActionAreaCard
