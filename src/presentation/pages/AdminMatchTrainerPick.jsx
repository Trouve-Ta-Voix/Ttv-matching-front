import { useContext } from "react"
import { UserContext } from "../../services/context/user"
import { useNavigate } from "react-router-dom"

import { CircularProgress, Container } from "@mui/material"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Logo from "../atoms/Logo/Logo"
import Title from "../atoms/Title/Title"
import Button from "../atoms/Button/Button"
import RoleLabel from "../atoms/RoleLabel/RoleLabel"
import Subtitle from "../atoms/Subtitle/Subtitle"
import SeparatorLine from "../atoms/Line/SeparatorLine"
import { getMatchingAvailability } from "../../services/api/Events"
import WaitingForEventClassCard from "../organisms/WaitingForEventClassCard/WaitingForEventClassCard"

const AdminMatchTrainerPick = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { userData, userToken } = useContext(UserContext)
    const [availability, setAvailability] = useState(null)
    const availabilityId = params.availabilityId

    const getAvailabilityData = async () => {
        if (userToken) {
            const fetchedAvailability = await getMatchingAvailability(
                userToken,
                availabilityId
            )

            setAvailability(fetchedAvailability)
        }
    }

    useEffect(() => {
        getAvailabilityData()
        // eslint-disable-next-line
    }, [userToken])

    if (!availability) {
        return (
            <MainLayout>
                <CircularProgress />
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <Logo position="inline" size="big" />
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "8px",
                        alignItems: {
                            xs: "center",
                            sm: "flex-start",
                        },
                        width: {
                            xs: "100%",
                            sm: "max-content",
                        },
                    }}
                >
                    <RoleLabel role={userData.role} />
                    <Title
                        title={`Bonjour, ${userData.firstName} ${userData.lastName}`}
                    />
                    <Button
                        content="Mon profil"
                        color="blue"
                        onClick={() => {
                            navigate("/profile")
                        }}
                        sx={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                    />
                </Container>
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    {availability ? (
                        <WaitingForEventClassCard
                            infos={availability}
                            key={availability.id}
                        />
                    ) : (
                        "Wololo"
                    )}
                </Container>
                <Container>
                    <Subtitle
                        subtitle="Formateurs disponibles"
                        color="blue"
                        position="left"
                    />
                    <SeparatorLine color="blue" size="big" />
                </Container>
            </MainLayout>
        )
    }
}

export default AdminMatchTrainerPick
