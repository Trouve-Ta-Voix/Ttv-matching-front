import React from "react"
import "./text-input.css"

const TextInput = ({ label, onChange, name, type, placeholder }) => {
    return (
        <div className="input-text">
            <p className="input-text-label">{label}</p>
            <input
                onChange={onChange}
                placeholder={placeholder}
                className="input-text-input"
                type={type}
                name={name}
            />
        </div>
    )
}

export default TextInput
