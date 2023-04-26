import React from "react"
import "./button.css"

const Button = ({ content, onClick, color, type }) => {
    return (
        <button type={type} onClick={onClick} className={`button ${color}`}>
            <p className="button-content">{content}</p>
        </button>
    )
}

export default Button
