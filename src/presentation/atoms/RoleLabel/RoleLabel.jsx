import "./role-label.css"

const RoleLabel = ({ role }) => {
    return (
        <div className={`rolelabel ${role}`}>
            <p className="rolelabel-text">
                {role?.charAt(0).toUpperCase() + role?.slice(1)}
            </p>
        </div>
    )
}

export default RoleLabel
