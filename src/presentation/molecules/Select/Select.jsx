const Select = ({ options, onChange, label }) => {
    return (
        <div>
            <label>{label}</label>
            <select name={label} onChange={onChange}>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.value}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select
