'use strict'

const {
  ArchivoLaboratoriosSchema,
  ARCHIVOLABORATORIOS_TABLE
} = require('./../models/appArchivoLaboratorios.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ARCHIVOLABORATORIOS_TABLE, ArchivoLaboratoriosSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ARCHIVOLABORATORIOS_TABLE)
  }
}
