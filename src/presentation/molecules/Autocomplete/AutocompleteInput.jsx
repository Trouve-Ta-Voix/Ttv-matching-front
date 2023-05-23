import { TextField, Autocomplete } from "@mui/material"
import { useState, useEffect } from "react"

const suggestions = [
    { label: "Afghanistan" },
    { label: "Aland Islands" },
    { label: "Albania" },
]

const AutocompleteInput = () => {
    function useDebounce(value, delay) {
        // State and setters for debounced value
        const [debouncedValue, setDebouncedValue] = useState(value)
        useEffect(
            () => {
                // Update debounced value after delay
                const handler = setTimeout(() => {
                    setDebouncedValue(value)
                }, delay)
                // Cancel the timeout if value changes (also on delay change or unmount)
                // This is how we prevent debounced value from updating if value is changed ...
                // .. within the delay period. Timeout gets cleared and restarted.
                return () => {
                    clearTimeout(handler)
                }
            },
            [value, delay] // Only re-call effect if value or delay changes
        )
        return debouncedValue
    }

    const [value, setValue] = useState(suggestions[0])
    const [inputValue, setInputValue] = useState("")

    return (
        <div>
            {console.log(value)}
            <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br />
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue)
                }}
                id="autocomplete-input"
                options={suggestions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Controllable" />
                )}
            />
        </div>
    )
}

export default AutocompleteInput

// ////////////////////////////

// function App() {
//
//     console.log(suggestions)
//     return (
//         <div>
//             <h1>Recherche de coordonnées géographiques</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" onChange={handleAddressChange} />
//                 <button type="submit">Rechercher</button>
//             </form>
//             <ul>
//                 {suggestions.map((suggestion) => {
//                     return <li key={suggestion}>{suggestion}</li>
//                 })}
//             </ul>

//             {coordinates.latitude && coordinates.longitude && (
//                 <div>
//                     <p>Latitude : {coordinates.latitude}</p>
//                     <p>Longitude : {coordinates.longitude}</p>
//                 </div>
//             )}
//             {coordinates.error && <p>{coordinates.error}</p>}
//         </div>
//     )
// }
