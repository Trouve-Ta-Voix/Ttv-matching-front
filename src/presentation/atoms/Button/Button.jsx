import React from "react";
import "./button.css";

const Button = ({ content, onClick, color }) => {
    return (
        <button onClick={onClick} className={`button ${color}`}>
            <p className="button-content">{content}</p>
        </button>
    );
};

export default Button;
