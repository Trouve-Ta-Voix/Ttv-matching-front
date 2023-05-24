const TimePicker = ({ label, onChange, value, name }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type="time"
                value={value}
                onChange={(value) => onChange(value)}
                id={name}
                name={name}
                min="08:00"
                max="19:00"
            />
        </>
    )
}

export default TimePicker
