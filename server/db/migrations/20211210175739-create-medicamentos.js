'use strict'

const {
  MedicamentoSchema,
  MEDICAMENTO_TABLE
} = require('./../models/appMedicamentos.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(MEDICAMENTO_TABLE, MedicamentoSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MEDICAMENTO_TABLE)
  }
}
