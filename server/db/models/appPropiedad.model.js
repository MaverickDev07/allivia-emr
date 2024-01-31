import { Model, DataTypes, Sequelize } from 'sequelize'
import { PACIENTE_TABLE } from './appPaciente.model'
// const { Model, DataTypes, Sequelize } = require('sequelize')
// const { PACIENTE_TABLE } = require('./appPaciente.model')

const PROPIEDAD_TABLE = 'app_propiedad'

const PropiedadSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
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
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creado: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('NOW()')
  },
  modificado: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('NOW()')
  }
}

class Propiedad extends Model {
  static associate(models) {
    this.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROPIEDAD_TABLE,
      modelName: 'Propiedad',
      timestamps: false
    }
  }
}

module.exports = {
  Propiedad,
  PropiedadSchema,
  PROPIEDAD_TABLE
}
