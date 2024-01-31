'use strict'

const {
  PropiedadSchema,
  PROPIEDAD_TABLE
} = require('./../models/appPropiedad.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PROPIEDAD_TABLE, PropiedadSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PROPIEDAD_TABLE)
  }
}
