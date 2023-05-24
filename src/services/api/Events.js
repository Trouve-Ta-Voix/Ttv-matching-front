// get selected events
const getSelectedEvents = async (token) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/events/selected`,
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

// get inactive events
const getInactiveEvents = async (token) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/events/inactive`,
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

// get inactive events
const getMatchingAvailability = async (token, availabilityId) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/events/inactive/${availabilityId}`,
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

export { getSelectedEvents, getInactiveEvents, getMatchingAvailability }
