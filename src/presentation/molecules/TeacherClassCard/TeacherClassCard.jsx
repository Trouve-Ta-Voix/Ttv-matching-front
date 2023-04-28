import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../../services/context/user"

import Trash from "../../../medias/icons/trash.png"
import Pencil from "../../../medias/icons/pencil.png"
import Eye from "../../../medias/icons/eye.png"

import { getTeacherClasseAvailabilities } from "../../../services/api/Classes"

import "./teacher-class-card.css"

const TeacherClassCard = ({ classInfos, isSelected, onClick, index }) => {
    const { userToken } = useContext(UserContext)
    const fetchClassAvailabilities = async () => {
        const fetchedAvailabilities = await getTeacherClasseAvailabilities(
            userToken,
            classInfos.id
        )
        if (fetchedAvailabilities) {
            setAvailabilities(fetchedAvailabilities)
        }
    }
    const [availabilities, setAvailabilities] = useState(null)
    useEffect(() => {
        fetchClassAvailabilities()
    }, [])
    return (
        <div
            className={`teacher-class-card ${
                isSelected ? "teacher-class-card-selected" : ""
            }`}
        >
            <p className="teacher-class-card-class-name">{classInfos.name}</p>
            <p className="teacher-class-card-class-students">
                {classInfos.size} élèves
            </p>
            <div className="teacher-class-card-icons">
                <img
                    onClick={() => onClick(index)}
                    className="teacher-class-card-icon"
                    src={Eye}
                    alt="eye"
                />
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
