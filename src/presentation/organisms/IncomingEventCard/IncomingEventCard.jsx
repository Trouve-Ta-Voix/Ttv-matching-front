import "./incoming-event-card.css"

const IncomingEventCard = ({ classInfos, hours, trainer }) => {
    return (
        <div className="incoming-event-card">
            <div className="incoming-event-card-top">
                <div className="incoming-event-card-top-left">
                    <p className="incoming-event-card-top-left-name">
                        {classInfos.school.name}
                    </p>
                    <p className="incoming-event-card-top-left-address">
                        {classInfos.school.address}
                    </p>
                </div>
                <div className="incoming-event-card-top-right">
                    <p className="incoming-event-card-top-right-name">
                        {classInfos.name}
                    </p>
                    <p className="incoming-event-card-top-right-hours">
                        {hours}
                    </p>
                </div>
            </div>
            <div className="incoming-event-card-bottom">
                <p className="incoming-event-card-bottom-trainer">
                    Formateur = {trainer}
                </p>
                <p className="incoming-event-card-bottom-teacher">
                    Enseignant = {classInfos.teacher}
                </p>
            </div>
        </div>
    )
}

export default IncomingEventCard
