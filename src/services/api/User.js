// get user data
const getUserData = async (token) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/me`,
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

// put user data
const updateUserInfo = async (token, body) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/update`,
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

// put user password
const updateUserPassword = async (token, body) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/password`,
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

// export

export { getUserData, updateUserInfo, updateUserPassword }
