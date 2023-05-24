import {
    TextField,
    Autocomplete,
    CircularProgress,
    Container,
} from "@mui/material"
import { useState, useEffect } from "react"
import useDebounce from "../../../services/hooks/useDebounce"
import getAddresses from "../../../services/api/addressAutocomplete"

const AutocompleteInput = ({ value, setValue }) => {
    // const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(false)

    const debouncedValue = useDebounce(inputValue, 1000)

    const updateAddresses = async () => {
        setLoading(true)
        const data = await getAddresses(inputValue)
        const properties = data?.features?.map((feature) => {
            return {
                ...feature.properties,
                coordinates: {
                    longitude: feature.geometry.coordinates[0],
                    latitude: feature.geometry.coordinates[1],
                },
            }
        })
        setAddresses(properties)
        setLoading(false)
    }

    useEffect(() => {
        if (inputValue) {
            updateAddresses()
        }
    }, [debouncedValue])

    return (
        <div>
            <br />
            <Container
                sx={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue.label)
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue)
                    }}
                    id="autocomplete-input"
                    options={addresses}
                    sx={{
                        width: {
                            xs: "200px",
                            sm: "300px",
                        },
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Entrez votre addresse" />
                    )}
                />
                {loading && (
                    <CircularProgress
                        sx={{
                            position: "absolute",
                            marginLeft: {
                                xs: "210px",
                                sm: "310px",
                            },
                        }}
                    />
                )}
            </Container>
        </div>
    )
}

export default AutocompleteInput
