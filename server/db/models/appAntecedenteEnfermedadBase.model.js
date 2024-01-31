// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { ANTECEDENTEMEDICO_TABLE } = require('./appAntecedenteMedico.model')
const { ENFERMEDADBASE_TABLE } = require('./appEnfermedadBase.model')

const ANTECEDENTEENFERMEDADBASE_TABLE = 'app_antecedente_enfermedad_base'

const AntecedenteEnfermedadBaseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  antecedenteMedicoId: {
    type: DataTypes.INTEGER,
    field: 'id_antecedente_medico',
    allowNull: false,
    references: {
      model: ANTECEDENTEMEDICO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  enfermedadBaseId: {
    type: DataTypes.INTEGER,
    field: 'id_enfermedad_base',
    allowNull: false,
    references: {
      model: ENFERMEDADBASE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class AntecedenteEnfermedadBase extends Model {
  static associate(models) {
    this.belongsTo(models.AntecedenteMedico, {
      foreignKey: 'antecedenteMedicoId',
      as: 'antecedenteMedico'
    })
    this.belongsTo(models.EnfermedadBase, {
      foreignKey: 'enfermedadBaseId',
      as: 'enfermedadBase'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ANTECEDENTEENFERMEDADBASE_TABLE,
      modelName: 'AntecedenteEnfermedadBase',
      timestamps: false
    }
  }
}

module.exports = {
  AntecedenteEnfermedadBase,
  AntecedenteEnfermedadBaseSchema,
  ANTECEDENTEENFERMEDADBASE_TABLE
}
