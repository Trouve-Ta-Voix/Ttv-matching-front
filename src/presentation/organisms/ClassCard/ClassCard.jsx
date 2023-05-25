import "./class-card.css"

const ClassCard = ({ c }) => {
    return (
        <div className={`class-card`}>
            <div className="class-card-top">
                <div className="class-card-top-left">
                    <p className="class-card-top-left-name">{c.school.name}</p>
                    <p className="class-card-top-left-address">
                        {c.school.address.currentAddress}
                    </p>
                </div>
                <div className="class-card-top-right">
                    <p className="class-card-top-right-name">
                        {c.name} ({c.size} élèves)
                    </p>
                </div>
            </div>
            <div className="class-card-bottom">
                <p className="class-card-bottom-teacher">
                    Enseignant = {c.teacher.firstName} {c.teacher.lastName}
                </p>
            </div>
        </div>
    )
}

export default ClassCard
