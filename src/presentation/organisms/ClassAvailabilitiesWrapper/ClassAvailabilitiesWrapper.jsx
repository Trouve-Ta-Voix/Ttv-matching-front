import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../../services/context/user"
import { getTeacherClasseAvailabilities } from "../../../services/api/Classes"

import "./class-availabilities-wrapper.css"
import TeacherClassSubcard from "../../molecules/TeacherClassSubcard/TeacherClassSubcard"

const ClassAvailabilitiesWrapper = ({ classId }) => {
    const { userToken } = useContext(UserContext)
    const fetchClassAvailabilities = async () => {
        const fetchedAvailabilities = await getTeacherClasseAvailabilities(
            userToken,
            classId
        )
        if (fetchedAvailabilities) {
            setAvailabilities(fetchedAvailabilities)
        }
    }
    const [availabilities, setAvailabilities] = useState(null)

    useEffect(() => {
        fetchClassAvailabilities()
        // eslint-disable-next-line
    }, [])

    return (
        <ul className="class-availabilities-wrapper">
            {availabilities?.map((availability) => {
                return (
                    <TeacherClassSubcard
                        key={availability.createAt} // key trouble ?
                        availability={availability}
                    />
                )
            })}
        </ul>
    )
}

export default ClassAvailabilitiesWrapper
