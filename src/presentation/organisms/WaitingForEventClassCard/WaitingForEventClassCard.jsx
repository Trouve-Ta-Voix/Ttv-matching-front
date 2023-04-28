import "./waiting-for-event-class-card.css"

const WaitingForEventClassCard = ({ classInfos }) => {
    return (
        <div className="waiting-event-class-card">
            <div className="waiting-event-class-card-left">
                <p className="waiting-event-class-card-left-school-name">
                    {classInfos.school.name}
                </p>
                <p className="waiting-event-class-card-left-school-address">
                    {classInfos.school.address}
                </p>
            </div>
            <div className="waiting-event-class-card-right">
                <p className="waiting-event-class-card-left-class-name">
                    {classInfos.name}
                </p>
                <p className="waiting-event-class-card-left-teacher">
                    Enseignant = {classInfos.teacher}
                </p>
            </div>
        </div>
    )
}

export default WaitingForEventClassCard
