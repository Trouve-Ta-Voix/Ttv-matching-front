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

// activate event
const activateEvent = async (userToken, eventId) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}/activate`,
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

// delete event
const deleteEvent = async (userToken, eventId) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
        }
    )

    const response = await request.json()
    return response
}

export {
    getSelectedEvents,
    getInactiveEvents,
    getMatchingAvailability,
    activateEvent,
    deleteEvent,
}
