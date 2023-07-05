import TextInput from "../../molecules/TextInput/TextInput"
import Button from "../../atoms/Button/Button"

import "./form.css"

const Form = ({ inputs, onSubmit, button, children, error }) => {
    return (
        <form onSubmit={onSubmit} className="form">
            {children}
            {inputs.map(
                ({
                    value,
                    name,
                    label,
                    type,
                    placeholder,
                    onChange,
                    error,
                }) => {
                    return (
                        <TextInput
                            key={name}
                            label={label}
                            value={value}
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            onChange={onChange}
                            error={error}
                        />
                    )
                }
            )}
            {error && <p className="form-error">{error}</p>}
            <Button
                type="submit"
                color={button.color}
                content={button.content}
            />
        </form>
    )
}

export default Form
