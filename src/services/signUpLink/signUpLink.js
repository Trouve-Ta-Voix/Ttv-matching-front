export const signUpLink = () => {
    navigator.clipboard.writeText(`${process.env.REACT_APP_SIGNUP_URL}`).then(
        function () {
            alert("Lien de création de compte copié dans le presse-papier")
        },
        function () {
            alert(`Lien d'incription : ${process.env.REACT_APP_SIGNUP_URL}`)
        }
    )
}
