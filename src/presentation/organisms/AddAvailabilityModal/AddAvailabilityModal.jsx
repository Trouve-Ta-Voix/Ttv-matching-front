import { useParams } from "react-router-dom"

import { useFormik } from "formik"
import { translateInMinutes } from "../../../services/timerange/timerange"

import Subtitle from "../../atoms/Subtitle/Subtitle"
import Logo from "../../atoms/Logo/Logo"
import Form from "../Form/Form"
// compo fleche retour
import Button from "../../atoms/Button/Button"
import TimePicker from "../../atoms/TimePicker/TimePicker"
import "./add-availability-modal.css"
import DaySelect from "../../atoms/Select/DaySelect"

const AddAvailabilityModal = ({ onClick, createAvailability }) => {
    const { classId } = useParams()
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
            const status = await createAvailability(
                classId,
                availabilityInMinutes
            )
            if (status === 200) {
                alert("La disponibilité a été créée")
                onClick()
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
                <Button
                    content="fleche"
                    onClick={onClick}
                    color="blue"
                    type="button"
                />
                <Logo position="inline" visible="hidden" />
                <Subtitle subtitle="Créer une disponibilité" />
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