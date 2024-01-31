// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { PACIENTE_TABLE } = require('./appPaciente.model')
const { SUSCRIPCION_TABLE } = require('./appSuscripcion.model')

const SUSCRIPCIONPACIENTE_TABLE = 'app_suscripcionpaciente'

const SuscripcionPacienteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  suscripcionId: {
    type: DataTypes.INTEGER,
    field: 'id_suscripcion',
    allowNull: false,
    references: {
      model: SUSCRIPCION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    field: 'id_paciente',
    allowNull: false,
    references: {
      model: PACIENTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  pagoId: {
    type: DataTypes.INTEGER,
    field: 'id_pago',
    references: {
      model: PACIENTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  vigencia: {
    type: DataTypes.DATE
  },
  estado: {
    type: DataTypes.STRING
  },
  motivo: {
    type: DataTypes.STRING
  },
  fecha: {
    type: DataTypes.DATE
  },
  tipoAgenda: {
    type: DataTypes.STRING,
    field: 'tipo_agenda'
  },
}

class SuscripcionPaciente extends Model {
  static associate(models) {
    this.belongsTo(models.Suscripcion, {
      foreignKey: 'suscripcionId',
      as: 'suscripcion'
    })
    this.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    })
    this.belongsTo(models.Pago, {
      foreignKey: 'pagoId',
      as: 'pago'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUSCRIPCIONPACIENTE_TABLE,
      modelName: 'SuscripcionPaciente',
      timestamps: false
    }
  }
}

module.exports = {
  SuscripcionPaciente,
  SuscripcionPacienteSchema,
  SUSCRIPCIONPACIENTE_TABLE
}
