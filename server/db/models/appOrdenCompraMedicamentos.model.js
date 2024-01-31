// import { Model, DataTypes, Sequelize } from 'sequelize'
// import { FICHAMEDICA_TABLE } from './appFichamedica.model'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { FICHAMEDICA_TABLE } = require('./appFichamedica.model')
const { DETALLEENVIO_TABLE } = require('./appDetalleEnvio.model')

const ORDENCOMPRAMEDICAMENTOS_TABLE = 'app_ordencompramedicamentos'

const OrdenCompraMedicamentosSchema = {
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
  detalleenvioId: {
    type: DataTypes.INTEGER,
    field: 'id_detalleenvio',
    allowNull: false,
    references: {
      model: DETALLEENVIO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  descuento: {
    type: DataTypes.INTEGER
  },
  total: {
    type: DataTypes.DOUBLE
  },
  medicamentos: {
    type: DataTypes.JSON
  }
}

class OrdenCompraMedicamentos extends Model {
  static associate(models) {
    this.belongsTo(models.FichaMedica, {
      foreignKey: 'fichamedicaId',
      as: 'fichamedica'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDENCOMPRAMEDICAMENTOS_TABLE,
      modelName: 'OrdenCompraMedicamentos',
      timestamps: false
    }
  }
}

module.exports = {
  OrdenCompraMedicamentos,
  OrdenCompraMedicamentosSchema,
  ORDENCOMPRAMEDICAMENTOS_TABLE
}
