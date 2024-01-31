'use strict'

const { FICHAMEDICAMENTOS_TABLE } = require('./../models/appFichamedicamentos.model')
const { MEDICAMENTO_TABLE } = require('./../models/appMedicamentos.model')
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(FICHAMEDICAMENTOS_TABLE, 'id_medicamento', {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: MEDICAMENTO_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(FICHAMEDICAMENTOS_TABLE, 'id_medicamento')
  }
}

