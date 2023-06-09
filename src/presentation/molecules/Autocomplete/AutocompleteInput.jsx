import { useState, useEffect } from "react"

import useDebounce from "../../../services/hooks/useDebounce"
import getAddresses from "../../../services/api/addressAutocomplete"

import {
    TextField,
    Autocomplete,
    CircularProgress,
    Container,
} from "@mui/material"

const AutocompleteInput = ({ value, setValue }) => {
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
            }
        })
        setAddresses(properties)
        setLoading(false)
    }

    useEffect(() => {
        if (inputValue) {
            updateAddresses()
        }
        // eslint-disable-next-line
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
                    disableClearable
                    options={addresses}
                    sx={{
                        width: {
                            xs: "200px",
                            sm: "300px",
                        },
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Entrez votre adresse" />
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
