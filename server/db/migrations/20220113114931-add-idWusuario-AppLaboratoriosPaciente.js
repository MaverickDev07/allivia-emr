'use strict'

const { LABORATORIOSPACIENTE_TABLE } = require('./../models/appLaboratoriosPaciente.model')
const { WEBUSUARIO_TABLE } = require('./../models/webUsuario.model')
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(LABORATORIOSPACIENTE_TABLE, 'id_wusuario', {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: WEBUSUARIO_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(LABORATORIOSPACIENTE_TABLE, 'id_wusuario')
  }
}
