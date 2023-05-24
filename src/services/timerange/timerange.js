const findDay = (availability) => {
    const testValues = [
        { day: "Lundi", startMinute: 0, endMinute: 1439 },
        { day: "Mardi", startMinute: 1440, endMinute: 2979 },
        { day: "Mercredi", startMinute: 2880, endMinute: 4319 },
        { day: "Jeudi", startMinute: 4320, endMinute: 5759 },
        { day: "Vendredi", startMinute: 5760, endMinute: 7199 },
        { day: "Samedi", startMinute: 7200, endMinute: 8639 },
        { day: "Dimanche", startMinute: 8640, endMinute: 10079 },
    ]
    const currentDay = testValues.find((testValue) => {
        return (
            availability.startMinute >= testValue.startMinute &&
            availability.startMinute <= testValue.endMinute
        )
    })
    return currentDay
}

const translateTime = (startMinutesDay, minutes) => {
    const currentHours = Math.floor((minutes - startMinutesDay) / 60)
    const currentHoursInMinutes = currentHours * 60
    const stayedMinutesInHour = minutes - startMinutesDay
    const currentMinutes = stayedMinutesInHour - currentHoursInMinutes
    return { hours: currentHours, minutes: currentMinutes }
}

const translateInMinutes = (dayValue, startAvailability, endAvailability) => {
    const startTime = startAvailability.split(":")
    const endTime = endAvailability.split(":")
    const startMinute =
        Number(dayValue) + Number(startTime[0] * 60 + Number(startTime[1]))
    const endMinute =
        Number(dayValue) + Number(endTime[0] * 60 + Number(endTime[1]))
    return { startMinute, endMinute }
}

export { findDay, translateTime, translateInMinutes }
