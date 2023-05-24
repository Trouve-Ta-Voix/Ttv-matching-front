import { useNavigate } from "react-router-dom"
import "./waiting-for-event-class-card.css"

const WaitingForEventClassCard = ({ infos, onClick }) => {
    const navigate = useNavigate()

    return (
        <div className="waiting-event-class-card" onClick={onClick}>
            <div className="waiting-event-class-card-left">
                <p className="waiting-event-class-card-left-school-name">
                    {infos.class.school.name}
                </p>
                <p className="waiting-event-class-card-left-school-address">
                    {infos.class.school.address.currentAddress}
                </p>
            </div>
            <div className="waiting-event-class-card-right">
                <p className="waiting-event-class-card-left-class-name">
                    {infos.class.name} ({infos.class.size} élèves)
                </p>
                <p className="waiting-event-class-card-left-teacher">
                    Enseignant = {infos.class.teacher.firstName}{" "}
                    {infos.class.teacher.lastName}
                </p>
            </div>
        </div>
    )
}

export default WaitingForEventClassCard
