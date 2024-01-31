// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { ANTECEDENTEMEDICO_TABLE } = require('./appAntecedenteMedico.model')
const { ALERGIA_TABLE } = require('./appAlergia.model')

const ANTECEDENTEALERGIA_TABLE = 'app_antecedente_alergia'

const AntecedenteAlergiaSchema = {
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
  alergiaId: {
    type: DataTypes.INTEGER,
    field: 'id_alergia',
    allowNull: false,
    references: {
      model: ALERGIA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class AntecedenteAlergia extends Model {
  static associate(models) {
    this.belongsTo(models.AntecedenteMedico, {
      foreignKey: 'antecedenteMedicoId',
      as: 'antecedenteMedico'
    })
    this.belongsTo(models.Alergia, {
      foreignKey: 'alergiaId',
      as: 'alergia'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ANTECEDENTEALERGIA_TABLE,
      modelName: 'AntecedenteAlergia',
      timestamps: false
    }
  }
}

module.exports = {
  AntecedenteAlergia,
  AntecedenteAlergiaSchema,
  ANTECEDENTEALERGIA_TABLE
}
