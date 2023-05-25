import "./admin-trainer-card.css"

const AdminTrainerCard = ({ trainer, onClick }) => {
    return (
        <div onClick={onClick} className="admin-trainer-card">
            <p className="admin-trainer-card-trainer">{trainer.name}</p>
            <div className="admin-trainer-card-separator"></div>
            <p className="admin-trainer-card-availabilities">
                Disponibilités = {trainer.availabilities.length}
            </p>
        </div>
    )
}

export default AdminTrainerCard
