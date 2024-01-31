// import { Model, DataTypes, Sequelize } from 'sequelize'
// import { USUARIO_TABLE } from './appUsuario.model'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { USUARIO_TABLE } = require('./appUsuario.model')

const PACIENTE_TABLE = 'app_paciente'

const PacienteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    field: 'usuario_id',
    allowNull: false,
    references: {
      model: USUARIO_TABLE,
      key: 'usuario_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  prueba: {
    type: DataTypes.BOOLEAN
  }
}

class Paciente extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: 'usuarioId',
      as: 'usuario'
    })
    this.hasMany(models.SuscripcionPaciente, {
      as: 'suscripcionpaciente',
      foreignKey: 'pacienteId'
    })
    this.hasMany(models.AgendaCita, {
      as: 'agendacita',
      foreignKey: 'pacienteId'
    })
    this.hasMany(models.Propiedad, {
      as: 'propiedad',
      foreignKey: 'pacienteId'
    })
    this.hasMany(models.AntecedenteMedico, {
      as: 'antecedenteMedico',
      foreignKey: 'pacienteId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PACIENTE_TABLE,
      modelName: 'Paciente',
      timestamps: false
    }
  }
}

module.exports = {
  Paciente,
  PacienteSchema,
  PACIENTE_TABLE
}
