import "./subtitle.css"

const Subtitle = ({ subtitle, color, position }) => {
    return (
        <h2 className={`subtitle subtitle-${color} subtitle-${position}`}>
            {subtitle}
        </h2>
    )
}

export default Subtitle
