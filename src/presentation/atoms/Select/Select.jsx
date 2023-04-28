import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import InputLabel from "@mui/material/InputLabel"

import "./select.css"

const style = {
    select: {
        width: "200px",
        border: "1px solid #0C15E4",
        color: "#0C15E4",
        borderRadius: "5px",
    },
    inputLabel: {
        color: "#0C15E4",
        fontSize: "20px",
    },
}

const SelectInput = ({ options, label, onChange }) => {
    return (
        <>
            <InputLabel id={`${label}-input-label`} sx={style.inputLabel}>
                {label}
            </InputLabel>
            <Select
                sx={style.select}
                labelId={`${label}-label`}
                id={`${label}-id`}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </>
    )
}

export default SelectInput
