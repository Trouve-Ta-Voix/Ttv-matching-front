import "./teacher-class-subcard.css"

const TeacherClassSubcard = ({ availability }) => {
    return (
        <div className="teacher-class-subcard">
            <p className="teacher-class-subcard-availability-day">
                {availability.day}
            </p>
            <p className="teacher-class-subcard-availability-hours">
                {availability.hours}
            </p>
        </div>
    )
}

export default TeacherClassSubcard
