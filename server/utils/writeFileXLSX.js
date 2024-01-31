import path from 'path'
import * as XLSX from 'xlsx'
import fs from 'fs'

function crearExcel(data) {
  const ruta = path.join(__dirname, 'files/usuariosPremium.xlsx')
  const workbook = XLSX.readFile(ruta)
  const workbookSheets = workbook.SheetNames
  const sheet = workbookSheets[0]
  const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])

  let worksheets = {}
  for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
    console.log('sheetName:', sheetName)
  }

  //console.log("json:\n", JSON.stringify(worksheets.Sheet1), "\n\n")

  //console.log(dataExcel)

  for (const fila of data) {
    worksheets.Sheet1.push(fila.dataValues)
  }

  console.log('Data worksheets:', worksheets)

  const newFile = path.join(__dirname, `files/${new Date().toISOString().split('T')[0]}.xlsx`)

  const newBook = XLSX.utils.book_new()
  const newSheet = XLSX.utils.json_to_sheet(worksheets.Sheet1)
  XLSX.utils.book_append_sheet(newBook, newSheet, "Sheet1")
  XLSX.writeFile(newBook, newFile)

  return `${new Date().toISOString().split('T')[0]}.xlsx`
}

module.exports = {
  crearExcel
}
