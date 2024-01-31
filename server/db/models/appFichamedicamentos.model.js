// import { Model, DataTypes, Sequelize } from 'sequelize'
// import { FICHAMEDICA_TABLE } from './appFichamedica.model'
// import { MEDICAMENTO_TABLE } from './appMedicamentos.model'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { FICHAMEDICA_TABLE } = require('./appFichamedica.model')
const { MEDICAMENTO_TABLE } = require('./appMedicamentos.model')

const FICHAMEDICAMENTOS_TABLE = 'app_fichamedicamentos'

const FichaMedicamentosSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fichamedicaId: {
    type: DataTypes.INTEGER,
    field: 'id_fichamedica',
    allowNull: false,
    references: {
      model: FICHAMEDICA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  medicamentoId: {
    type: DataTypes.INTEGER,
    field: 'id_medicamento',
    allowNull: false,
    references: {
      model: MEDICAMENTO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  nombre_medicamento: {
    type: DataTypes.STRING
  },
  indicaciones: {
    type: DataTypes.STRING
  },
  tratamiento: {
    type: DataTypes.BOOLEAN
  },
  duracion: {
    type: DataTypes.STRING
  },
  dosis: {
    type: DataTypes.STRING
  },
  cantidad: {
    type: DataTypes.INTEGER
  }
}

class FichaMedicamentos extends Model {
  static associate(models) {
    this.belongsTo(models.FichaMedica, {
      foreignKey: 'fichamedicaId',
      as: 'fichamedica'
    })
    this.belongsTo(models.Medicamento, {
      foreignKey: 'medicamentoId',
      as: 'medicamento'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FICHAMEDICAMENTOS_TABLE,
      modelName: 'FichaMedicamentos',
      timestamps: false
    }
  }
}

module.exports = {
  FichaMedicamentos,
  FichaMedicamentosSchema,
  FICHAMEDICAMENTOS_TABLE
}
