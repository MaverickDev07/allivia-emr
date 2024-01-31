'use strict'

const {
  OrdenCompraMedicamentosSchema,
  ORDENCOMPRAMEDICAMENTOS_TABLE
} = require('./../models/appOrdenCompraMedicamentos.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORDENCOMPRAMEDICAMENTOS_TABLE, OrdenCompraMedicamentosSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDENCOMPRAMEDICAMENTOS_TABLE)
  }
}
