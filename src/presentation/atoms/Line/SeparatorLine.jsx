import "./separatorLine.css"

const SeparatorLine = ({ color, size }) => {
    return (
        <div
            className={`separator-line separator-line-${color} separator-line-${size}`}
        ></div>
    )
}

export default SeparatorLine
