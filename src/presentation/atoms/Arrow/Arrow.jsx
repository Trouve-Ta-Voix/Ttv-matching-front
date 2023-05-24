import arrow from "../../../medias/icons/arrow.png"
import "./arrow.css"

const Arrow = ({ orientation, onClick }) => {
    return (
        <img
            onClick={onClick}
            className={`arrow arrow-${orientation}`}
            src={arrow}
            alt="arrow"
        />
    )
}

export default Arrow
