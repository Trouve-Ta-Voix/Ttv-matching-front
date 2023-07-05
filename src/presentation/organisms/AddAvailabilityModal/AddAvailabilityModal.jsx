import { useFormik } from "formik"
import { translateInMinutes } from "../../../services/timerange/timerange"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Logo from "../../atoms/Logo/Logo"
import Form from "../Form/Form"
import Arrow from "../../atoms/Arrow/Arrow"
import TimePicker from "../../atoms/TimePicker/TimePicker"
import DaySelect from "../../atoms/Select/DaySelect"

import "./add-availability-modal.css"

const AddAvailabilityModal = ({
    onClick,
    createAvailability,
    closeModal,
    getAvailabilities,
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
            const status = await createAvailability(availabilityInMinutes)
            if (status === 200) {
                await getAvailabilities()
                alert("La disponibilité a été créée")
                closeModal()
            } else if (status === 412) {
                alert(
                    "Les horaires ne sont pas corrects, merci de les corriger"
                )
            }
        },
    })

    // render
    return (
        <div className="add-availability-modal">
            <div className="box-content container">
                <Arrow onClick={onClick} orientation="left" />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Créer une disponibilité" color="blue" />
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

export default AddAvailabilityModal
