import "./button.css"

const Button = ({ content, onClick, color, type }) => {
    return (
        <button type={type} onClick={onClick} className={`button ${color}`}>
            {content}
        </button>
    )
}

export default Button
