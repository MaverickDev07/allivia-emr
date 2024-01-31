// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const SUSCRIPCION_TABLE = 'app_suscripcion'

const SuscripcionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  },
  detalle: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.STRING
  },
  eliminado: {
    type: DataTypes.BOOLEAN
  },
  codigo: {
    type: DataTypes.STRING
  },
  tipo_agenda: {
    type: DataTypes.STRING
  },
}

class Suscripcion extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUSCRIPCION_TABLE,
      modelName: 'Suscripcion',
      timestamps: false
    }
  }
}

module.exports = {
  Suscripcion,
  SuscripcionSchema,
  SUSCRIPCION_TABLE
}
