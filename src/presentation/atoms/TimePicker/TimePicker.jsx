import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker"
import dayjs from "dayjs"

const TimePicker = ({ label, onChange, value }) => {
    return (
        <div>
            <MobileTimePicker
                minutesStep={5}
                label={label}
                value={value}
                onChange={(value) => onChange(value)}
            />
        </div>
    )
}

export default TimePicker
