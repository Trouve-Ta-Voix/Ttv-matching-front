import { useContext } from "react"
import { UserContext } from "../../../services/context/user"
import { useFormik } from "formik"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Logo from "../../atoms/Logo/Logo"
// compo fleche retour
import Button from "../../atoms/Button/Button"

import "./add-availability-modal.css"

const AddAvailabilityModal = () => {
    const { userToken } = useContext(UserContext)
    // const formik = useFormik({
    //     initialValues: {
    //         currentPassword: "",
    //         newPassword: "",
    //         newPasswordConfirmation: "",
    //     },
    //     onSubmit: async (values) => {
    //         if (values.newPassword === values.newPasswordConfirmation) {
    //             const body = {
    //                 password: values.currentPassword,
    //                 newPassword: values.newPassword,
    //             }
    //             const response = await updateUserPassword(userToken, body)
    //             if (!response.message) {
    //                 onClick()
    //             }
    //         } else {
    //             alert("Les Mots de passes ne correspondent pas")
    //         }
    //     },
    // })

    // render
    return (
        <div className="add-availability-modal">
            <div className="box-content container">
                {/* <Button
                    content="fleche"
                    onClick={onClick}
                    color="blue"
                    type="button"
                /> */}
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Créer une disponibilité" />
            </div>
        </div>
    )
}

export default AddAvailabilityModal
