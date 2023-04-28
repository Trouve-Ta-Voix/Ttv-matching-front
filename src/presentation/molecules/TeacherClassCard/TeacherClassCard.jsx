import Trash from "../../../medias/icons/trash.png"
import Pencil from "../../../medias/icons/pencil.png"
import Eye from "../../../medias/icons/eye.png"

import "./teacher-class-card.css"

const TeacherClassCard = ({ classInfos, isSelected }) => {
    return (
        <div
            className={`teacher-class-card ${
                isSelected ? "teacher-class-card-selected" : ""
            }`}
        >
            <p className="teacher-class-card-class-name">{classInfos.name}</p>
            <p className="teacher-class-card-class-students">
                {classInfos.number} élèves
            </p>
            <div className="teacher-class-card-icons">
                <img className="teacher-class-card-icon" src={Eye} alt="eye" />
                <img
                    className="teacher-class-card-icon"
                    src={Pencil}
                    alt="pen"
                />
                <img
                    className="teacher-class-card-icon"
                    src={Trash}
                    alt="trash"
                />
            </div>
        </div>
    )
}

export default TeacherClassCard
