// import { Model, DataTypes, Sequelize } from 'sequelize'
// import { AGENDACITA_TABLE } from './appAgendacita.model'
// import { PROGRAMAFASE_TABLE } from './appProgramafase.model'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { AGENDACITA_TABLE } = require('./appAgendacita.model')
const { PROGRAMAFASE_TABLE } = require('./appProgramafase.model')

const FICHAMEDICA_TABLE = 'app_fichamedica'

const FichaMedicaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  agendacitaId: {
    type: DataTypes.INTEGER,
    field: 'id_agendacita',
    allowNull: false,
    references: {
      model: AGENDACITA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  programafaseId: {
    type: DataTypes.INTEGER,
    field: 'id_programafase',
    allowNull: false,
    references: {
      model: PROGRAMAFASE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class FichaMedica extends Model {
  static associate(models) {
    // this.belongsTo(models.ProgramaFase, { as: 'programaFase' })
    this.belongsTo(models.AgendaCita, { as: 'agendacita' })
    this.hasMany(models.FichaDiagnostico, {
      as: 'fichadiagnostico',
      foreignKey: 'fichamedicaId'
    })
    this.hasMany(models.FichaMedicamentos, {
      as: 'fichamedicamentos',
      foreignKey: 'fichamedicaId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FICHAMEDICA_TABLE,
      modelName: 'FichaMedica',
      timestamps: false
    }
  }
}

module.exports = {
  FichaMedica,
  FichaMedicaSchema,
  FICHAMEDICA_TABLE
}
