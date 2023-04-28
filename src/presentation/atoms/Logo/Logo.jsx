import logo from "../../../medias/images/logo.png"

import "./logo.css"

const Logo = ({ size, position }) => {
    return (
        <img
            src={logo}
            className={`logo-default ${position}`}
            alt="Logo Trouve Ta Voix"
        />
    )
}

export default Logo
