import Subtitle from "../../atoms/Subtitle/Subtitle"
import Logo from "../../atoms/Logo/Logo"
import Arrow from "../../atoms/Arrow/Arrow"
import Form from "../Form/Form"
import { useFormik } from "formik"

import { translateInMinutes } from "../../../services/timerange/timerange"

import DaySelect from "../../atoms/Select/DaySelect"
import TimePicker from "../../atoms/TimePicker/TimePicker"

import "./update-availability-modal.css"
const UpdateAvailabilityModal = ({
    onClick,
    closeModal,
    updateAvailability,
}) => {
    const formik = useFormik({
        initialValues: {
            startAvailability: "08:00",
            endAvailability: "18:30",
            dayValue: 0,
        },
        onSubmit: async (values) => {
            const availabilityInMinutes = translateInMinutes(
                values.dayValue,
                values.startAvailability,
                values.endAvailability
            )
            const status = await updateAvailability(availabilityInMinutes)
            if (status === 200) {
                alert("La disponibilité a été créée")
                closeModal()
            } else if (status === 412) {
                alert(
                    "Les horaires ne sont pas corrects, merci de les corriger"
                )
            }
        },
    })
    return (
        <div className="update-availability-modal" onClick={onClick}>
            <div className="box-content container">
                <Arrow onClick={onClick} orientation="left" />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Modifier la disponibilité" color="blue" />
                <Form
                    onSubmit={formik.handleSubmit}
                    button={{ color: "blue", content: "Créer" }}
                    inputs={[]}
                >
                    <DaySelect onChange={formik.handleChange} name="dayValue" />
                    <TimePicker
                        name="startAvailability"
                        label="Heure de Début"
                        value={formik.values.startAvailability}
                        onChange={formik.handleChange}
                    />
                    <TimePicker
                        name="endAvailability"
                        label="Heure de Fin"
                        value={formik.values.endAvailability}
                        onChange={formik.handleChange}
                    />
                </Form>
            </div>
        </div>
    )
}

export default UpdateAvailabilityModal
