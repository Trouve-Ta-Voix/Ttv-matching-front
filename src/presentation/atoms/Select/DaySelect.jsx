import "./day-select.css"

const DaySelect = ({ name, label, onChange }) => {
    const days = [
        { name: "Monday", value: 0, label: "Lundi" },
        { name: "Tuesday", value: 1440, label: "Mardi" },
        { name: "Wednesday", value: 2880, label: "Mercredi" },
        { name: "Thursday", value: 4320, label: "Jeudi" },
        { name: "Friday", value: 5760, label: "Vendredi" },
        { name: "Saturday", value: 7200, label: "Samedi" },
        { name: "Sunday", value: 8640, label: "Dimanche" },
    ]
    return (
        <select name={name} id={name} onChange={(value) => onChange(value)}>
            {days.map((day) => {
                return (
                    <option key={day.name} value={day.value}>
                        {day.label}
                    </option>
                )
            })}
        </select>
    )
}

export default DaySelect
