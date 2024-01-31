// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { WEBROL_TABLE } = require('./webRol.model')

const WEBUSUARIO_TABLE = 'web_usuario'

const WebUsuarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  rolId: {
    type: DataTypes.INTEGER,
    field: 'rol_id',
    allowNull: false,
    references: {
      model: WEBROL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class WebUsuario extends Model {
  static associate(models) {
    this.belongsTo(models.WebRol, {
      foreignKey: 'rolId',
      as: 'wrol'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WEBUSUARIO_TABLE,
      modelName: 'WebUsuario',
      timestamps: false
    }
  }
}

module.exports = {
  WebUsuario,
  WebUsuarioSchema,
  WEBUSUARIO_TABLE
}
