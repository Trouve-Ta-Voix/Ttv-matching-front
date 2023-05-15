import { useNavigate } from "react-router-dom"
import logo from "../../../medias/images/logo.png"

import "./logo.css"

const Logo = ({ position, visible }) => {
    const navigate = useNavigate()
    return (
        <img
            src={logo}
            className={`logo-default ${position} ${visible}`}
            alt="Logo Trouve Ta Voix"
            onClick={() => navigate("/")}
        />
    )
}

export default Logo
