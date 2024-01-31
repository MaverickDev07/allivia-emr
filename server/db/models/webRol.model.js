// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const WEBROL_TABLE = 'web_rol'

const WebRolSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING
  }
}

class WebRol extends Model {
  static associate(models) {
    this.hasMany(models.WebUsuario, {
      as: 'wusuario',
      foreignKey: 'rolId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WEBROL_TABLE,
      modelName: 'WebRol',
      timestamps: false
    }
  }
}

module.exports = {
  WebRol,
  WebRolSchema,
  WEBROL_TABLE
}
