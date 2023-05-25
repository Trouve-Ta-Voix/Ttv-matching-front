export const doMatch = async (userToken, classId) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/events/classes/${classId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
        }
    )

    const response = await request.json()
    return response
}
