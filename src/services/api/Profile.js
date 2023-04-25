// get trainer's adresses

const getTrainerAdresses = async (token) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/adresses`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    )
    const response = await request.json()
    return response
}

export { getTrainerAdresses }
