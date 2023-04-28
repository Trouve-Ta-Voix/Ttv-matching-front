import "./admin-class-card.css"

const AdminClassCard = ({ school, classInfos, teacher }) => {
    return (
        <div className="admin-class-card">
            <div className="admin-class-card-left">
                <p className="admin-class-card-left-school-name">
                    {school.name}
                </p>
                <p className="admin-class-card-left-school-address">
                    {school.address}
                </p>
            </div>
            <div className="admin-class-card-right">
                <p className="admin-class-card-left-class-name">{classInfos}</p>
                <p className="admin-class-card-left-teacher">
                    Enseignant = {teacher}
                </p>
            </div>
        </div>
    )
}

export default AdminClassCard
