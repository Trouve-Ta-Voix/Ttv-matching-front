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

const signUpTeacher = async ({
    email,
    password,
    firstName,
    lastName,
    phone,
    role,
}) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup-teacher`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName,
                phone,
                role: "teacher",
            }),
        }
    )
    const response = await request.json()
    return { response, status: request.status }
}

const signUpTrainer = async ({
    email,
    password,
    firstName,
    lastName,
    phone,
    currentAddress,
}) => {
    const request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup-trainer`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName,
                phone,
                currentAddress,
                role: "trainer",
            }),
        }
    )
    const response = await request.json()
    return { response, status: request.status }
}

export { login, signUpTeacher, signUpTrainer }
