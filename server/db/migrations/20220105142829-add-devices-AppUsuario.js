/*'use strict'

const { USUARIO_TABLE } = require('./../models/appUsuario.model')
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(USUARIO_TABLE, 'devices', {
      allowNull: true,
      type: DataTypes.ARRAY(DataTypes.TEXT)
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(USUARIO_TABLE, 'devices')
  }
};
*/
