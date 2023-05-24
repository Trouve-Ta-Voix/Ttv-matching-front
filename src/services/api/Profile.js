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

const getTrainerAdress = async (token, id) => {
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

// create one address

const createAddress = async (value, token) => {
    const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/trainer/addresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(value),
    })

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

// export

export { getTrainerAdresses, getTeacherClasses, deleteTeacherClass, deleteTrainerAddress, getTrainerAdress, createAddress }
