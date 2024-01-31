// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { ANTECEDENTEMEDICO_TABLE } = require('./appAntecedenteMedico.model')
const { CIRUGIA_TABLE } = require('./appCirugia.model')

const ANTECEDENTECIRUGIA_TABLE = 'app_antecedente_cirugia'

const AntecedenteCirugiaSchema = {
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
  cirugiaId: {
    type: DataTypes.INTEGER,
    field: 'id_cirugia',
    allowNull: false,
    references: {
      model: CIRUGIA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class AntecedenteCirugia extends Model {
  static associate(models) {
    this.belongsTo(models.AntecedenteMedico, {
      foreignKey: 'antecedenteMedicoId',
      as: 'antecedenteMedico'
    })
    this.belongsTo(models.Cirugia, {
      foreignKey: 'cirugiaId',
      as: 'cirugia'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ANTECEDENTECIRUGIA_TABLE,
      modelName: 'AntecedenteCirugia',
      timestamps: false
    }
  }
}

module.exports = {
  AntecedenteCirugia,
  AntecedenteCirugiaSchema,
  ANTECEDENTECIRUGIA_TABLE
}
