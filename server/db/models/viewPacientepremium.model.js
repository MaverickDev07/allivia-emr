// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const PACIENTEPREMIUM_TABLE = 'pacientepremium'

const PacientePremiumSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER
  },
  id_paciente: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING
  },
  carnet: {
    type: DataTypes.STRING
  },
  fecha_nacimiento: {
    type: DataTypes.STRING
  },
  genero: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  fecha_registro: {
    type: DataTypes.STRING
  },
  vigencia_suscripcion: {
    type: DataTypes.STRING
  },
  suscripcion: {
    type: DataTypes.STRING
  }
}

class PacientePremium extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PACIENTEPREMIUM_TABLE,
      modelName: 'PacientePremium',
      timestamps: false
    }
  }
}

module.exports = {
  PacientePremium,
  PacientePremiumSchema,
  PACIENTEPREMIUM_TABLE
}
