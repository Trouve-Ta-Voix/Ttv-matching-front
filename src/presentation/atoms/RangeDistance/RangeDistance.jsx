import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"
import MuiInput from "@mui/material/Input"
import transports from "../../../medias/icons/transports.png"

const Input = styled(MuiInput)`
    width: 42px;
`

const RangeDistance = ({ value, setValue }) => {
    const handleSliderChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleInputChange = (event) => {
        setValue(event.target.value === "" ? "" : Number(event.target.value))
    }

    const handleBlur = () => {
        if (value < 0) {
            setValue(0)
        } else if (value > 60) {
            setValue(60)
        }
    }

    return (
        <Box sx={{ width: 250, marginBottom: "20px" }}>
            <Typography
                id="input-slider"
                gutterBottom
                sx={{ color: "#0C15E4" }}
            >
                Distance (temps en transports)
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <img src={transports} alt="transports icon" />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === "number" ? value : 0}
                        min={0}
                        max={60}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        sx={{ color: "#0C15E4" }}
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 60,
                            type: "number",
                            "aria-labelledby": "input-slider",
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default RangeDistance
