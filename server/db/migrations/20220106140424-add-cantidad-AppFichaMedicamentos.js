'use strict'

const { FICHAMEDICAMENTOS_TABLE } = require('./../models/appFichamedicamentos.model')
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(FICHAMEDICAMENTOS_TABLE, 'cantidad', {
      type: DataTypes.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(FICHAMEDICAMENTOS_TABLE, 'cantidad')
  }
}
