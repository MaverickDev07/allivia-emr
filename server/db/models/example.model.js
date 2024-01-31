// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const _TABLE = 'app_...'

const Schema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  atributo: {
    type: DataTypes.STRING
  }
}

class Modelo extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: _TABLE,
      modelName: 'Modelo',
      timestamps: false
    }
  }
}

module.exports = {
  Modelo,
  Schema,
  _TABLE
}
