import "./button.css"

const Button = ({ content, onClick, color, type, className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${color} ${className}`}
        >
            {content}
        </button>
    )
}

export default Button
