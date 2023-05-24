const getAddresses = async (address) => {
    const request = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${address}`,
        {
            header: {
                "Content-Type": "application/json",
            },
        }
    )
    const response = await request.json()
    return response
}

export default getAddresses
