const Select = ({ options, onChange }) => {
    return (
        <div>
            <select name="userType" onChange={onChange}>
                {options.map((option)=> {
                    return <option key={option.value} value={option.value}>{option.value}</option>
                })}
            </select>
        </div>
    )
}

export default Select
