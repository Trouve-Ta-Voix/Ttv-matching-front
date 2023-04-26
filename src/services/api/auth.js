// login
const login = async ({ email, password }) => {
    const body = { email, password }
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
    )
    const response = await request.json()
    return response
}

// signup-teacher

const signUpTeacher = async ({
    email,
    password,
    firstName,
    lastName,
    phone,
}) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup-teacher`,
        {
            method: "POST",
            body: {
                email,
                password,
                firstName,
                lastName,
                phone,
                role: "teacher",
            },
        }
    )
    const response = await request.json()
    return response
}

// signup-trainer
const signUpTrainer = async ({
    email,
    password,
    firstName,
    lastName,
    phone,
    number,
    street,
    city,
    zipCode,
    longitude,
    latitude,
    country,
}) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup-teacher`,
        {
            method: "POST",
            body: {
                email,
                password,
                firstName,
                lastName,
                phone,
                role: "trainer",
                number,
                street,
                city,
                zipCode,
                longitude,
                latitude,
                country,
            },
        }
    )
    const response = await request.json()
    return response
}

export { login, signUpTeacher, signUpTrainer }
