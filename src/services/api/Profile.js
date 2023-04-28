// get trainer's adresses

const getTrainerAdresses = async (token) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/addresses`,
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

// get teacher classes

const getTeacherAddresses = async (token) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/classes`,
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

export { getTrainerAdresses, getTeacherAddresses }
