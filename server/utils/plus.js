function dateTime() {
  const date = new Date()
  return new Date(date.valueOf() - date.getTimezoneOffset() * 60000)
}
function localDate() {
  return new Date().toLocaleString("es-BO", {
    timeZone: "America/La_Paz"
  })
}

function calculateAge(birthDate, otherDate) {
    birthDate = new Date(birthDate)
    otherDate = new Date(otherDate)

    let years = (otherDate.getFullYear() - birthDate.getFullYear())

    if (otherDate.getMonth() < birthDate.getMonth() || otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--
    }

    return years;
}

module.exports = {
  dateTime,
  localDate,
  calculateAge
}
