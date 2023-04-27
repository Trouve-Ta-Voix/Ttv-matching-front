import "./checkbox-input.css"

const CheckboxInput = ({ label, value, onClick }) => {
    return (
        <>
            <input id={label} type="checkbox" className="checkbox" />
            <label
                for={label}
                value={value}
                onClick={onClick}
                className="checkbox-label"
            >
                {label}
            </label>
        </>
    )
}

export default CheckboxInput
