import { Op } from 'sequelize'

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

function search(filter) {
  return filter.split(' ').map((el) => {
    return { [Op.like]: `%${el}%` }
  })
}

function getPagination(page, size) {
  const limit = size ? +size : 5
  const offset = page ? page * limit : 0
  return { limit, offset }
}

function getPagingFormat(_data, page, limit) {
  const { count: totalItems, rows: data } = _data
  const currentPage = page ? +page : 0
  const totalPages = page ? Math.ceil(totalItems / limit) : 0
  return { totalItems, data, totalPages, currentPage }
}

function getCountFormat(_data) {
  const { count: totalItems, rows: data } = _data
  return { totalItems, data }
}

module.exports = {
  dateTime,
  localDate,
  calculateAge,
  search,
  getPagination,
  getPagingFormat,
  getCountFormat
}

