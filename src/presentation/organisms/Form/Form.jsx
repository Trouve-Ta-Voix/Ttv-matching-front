import TextInput from "../../molecules/TextInput/TextInput"
import Button from "../../atoms/Button/Button"

const Form = ({ inputs, onSubmit, button, children }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
            {inputs.map(
                ({ value, name, label, type, placeholder, onChange }) => {
                    return (
                        <TextInput
                            key={name}
                            label={label}
                            value={value}
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            onChange={onChange}
                        />
                    )
                }
            )}
            <Button
                type="submit"
                color={button.color}
                content={button.content}
            />
        </form>
    )
}

export default Form
