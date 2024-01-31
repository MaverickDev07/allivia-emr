// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { ANTECEDENTEMEDICO_TABLE } = require('./appAntecedenteMedico.model')

const ANTECEDENTEFAMILIA_TABLE = 'app_antecedente_familia'

const AntecedenteFamiliaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING
  },
  diabetes: {
    type: DataTypes.INTEGER
  },
  cancer: {
    type: DataTypes.STRING
  },
  enfemedadCorazon: {
    type: DataTypes.BOOLEAN
  },
  hipertension: {
    type: DataTypes.BOOLEAN
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
  enfemedad_corazon: {
    type: DataTypes.BOOLEAN
  }
}

class AntecedenteFamilia extends Model {
  static associate(models) {
    this.belongsTo(models.AntecedenteMedico, {
      foreignKey: 'antecedenteMedicoId',
      as: 'antecedenteMedico'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ANTECEDENTEFAMILIA_TABLE,
      modelName: 'AntecedenteFamilia',
      timestamps: false
    }
  }
}

module.exports = {
  AntecedenteFamilia,
  AntecedenteFamiliaSchema,
  ANTECEDENTEFAMILIA_TABLE
}
