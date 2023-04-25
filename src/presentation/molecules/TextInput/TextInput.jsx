import React from "react";
import "./text-input.css";

const TextInput = ({ label, onChange }) => {
    return (
        <div className="input-text">
            <p className="input-text-label">{label}</p>
            <input
                onChange={onChange}
                className="input-text-input"
                type="text"
            />
        </div>
    );
};

export default TextInput;
