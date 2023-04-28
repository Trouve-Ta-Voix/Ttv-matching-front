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

export { getTeacherClasseAvailabilities }
