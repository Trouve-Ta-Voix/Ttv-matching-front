import { Link, useNavigate } from "react-router-dom"
import "./inactive-class-card.css"

const InactiveClassCard = ({ infos, onClick }) => (
    <Link
        to={`/admin/classes/${infos.id}`}
        className="inactive-class-card"
        onClick={onClick}
    >
        <div className="inactive-class-card-left">
            <p className="inactive-class-card-left-school-name">
                {infos.school.name}
            </p>
            <p className="inactive-class-card-left-school-address">
                {infos.school.address.currentAddress}
            </p>
        </div>
        <div className="inactive-class-card-right">
            <p className="inactive-class-card-left-class-name">
                {infos.name} ({infos.size} élèves)
            </p>
            <p className="inactive-class-card-left-teacher">
                Enseignant = {infos.teacher.firstName} {infos.teacher.lastName}
            </p>
        </div>
    </Link>
)

export default InactiveClassCard
