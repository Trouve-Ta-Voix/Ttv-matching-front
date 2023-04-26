import TextInput from "../../molecules/TextInput/TextInput"
import Button from "../../atoms/Button/Button"

const Form = ({ input, onSubmit, button, children }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
            {input.map(({ value, name, type, placeholder, onChange }) => {
                return (
                    <TextInput
                        key={name}
                        label={name}
                        value={value}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        onChange={onChange}
                    />
                )
            })}
            <Button
                type="submit"
                color={button.color}
                content={button.content}
            />
        </form>
    )
}

export default Form
