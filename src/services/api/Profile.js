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

// get one address

const getTrainerAddress = async (token, id) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/address/${id}`,
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

// put one address

const updateTrainerAdress = async (token, body, id) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/address/${id}`,
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

// create one address

const createAddress = async (token, body) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/trainer/addresses`,
        {
            method: "POST",
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

// delete trainer address

const deleteTrainerAddress = async (token, id) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/address/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    )
    const response = await request.json()
    return { response, status: request.status }
}

// get teacher classes

const getTeacherClasses = async (token) => {
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
// delete teacher class

const deleteTeacherClass = async (token, classId) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/classes/${classId}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    )
    const response = await request.json()
    return { response, status: request.status }
}

const getTeacherSchool = async (token) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/schools/myschool`,
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

const createTeacherSchool = async (token, body) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/profile/schools`,
        {
            method: "POST",
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

export {
    getTrainerAdresses,
    getTeacherClasses,
    deleteTeacherClass,
    deleteTrainerAddress,
    getTrainerAddress,
    createAddress,
    updateTrainerAdress,
    getTeacherSchool,
    createTeacherSchool,
}
