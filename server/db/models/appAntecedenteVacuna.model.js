// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { ANTECEDENTEMEDICO_TABLE } = require('./appAntecedenteMedico.model')
const { VACUNA_TABLE } = require('./appVacuna.model')

const ANTECEDENTEVACUNA_TABLE = 'app_antecedente_vacuna'

const AntecedenteVacunaSchema = {
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
  vacunaId: {
    type: DataTypes.INTEGER,
    field: 'id_vacuna',
    allowNull: false,
    references: {
      model: VACUNA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class AntecedenteVacuna extends Model {
  static associate(models) {
    this.belongsTo(models.AntecedenteMedico, {
      foreignKey: 'antecedenteMedicoId',
      as: 'antecedenteMedico'
    })
    this.belongsTo(models.Vacuna, {
      foreignKey: 'vacunaId',
      as: 'vacuna'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ANTECEDENTEVACUNA_TABLE,
      modelName: 'AntecedenteVacuna',
      timestamps: false
    }
  }
}

module.exports = {
  AntecedenteVacuna,
  AntecedenteVacunaSchema,
  ANTECEDENTEVACUNA_TABLE
}
