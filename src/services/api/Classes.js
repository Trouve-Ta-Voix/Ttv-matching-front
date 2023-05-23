// get classe's availibilities

const getTeacherClasseAvailabilities = async (token, classId) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/classes/${classId}/availabilities`,
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

// put class informations
const updateClassInfo = async (token, classId, body) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/classes/${classId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        }
    )
    const response = await request.json()
    return response
}

// get class informations
const getClassInfo = async (token, classId) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/classes/${classId}`,
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

// export

export { getTeacherClasseAvailabilities, updateClassInfo, getClassInfo }
