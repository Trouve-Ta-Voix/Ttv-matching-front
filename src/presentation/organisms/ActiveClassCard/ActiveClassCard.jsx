import { Link } from "react-router-dom"
import "./active-class-card.css"

const ActiveClassCard = ({ infos, hours, trainer }) => {
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
