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
            body: {
                email,
                password,
                firstName,
                lastName,
                phone,
                role,
            },
        }
    )
    const response = await request.json()
    return response
}

const signUpTrainer = async ({
    email,
    password,
    firstName,
    lastName,
    phone,
    address,
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
                name: "Konexio",
                currentAddress: address,
                role: "trainer",
            }),
        }
    )
    const response = await request.json()
    return response
}

export { login, signUpTeacher, signUpTrainer }
