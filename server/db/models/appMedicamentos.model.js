// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const MEDICAMENTO_TABLE = 'app_medicamentos'

const MedicamentoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  grupo: {
    type: DataTypes.STRING
  },
  producto: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.FLOAT
  }
}

class Medicamento extends Model {
  static associate(models) {
    this.hasMany(models.FichaMedicamentos, {
      as: 'fichamedicamentos',
      foreignKey: 'medicamentoId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MEDICAMENTO_TABLE,
      modelName: 'Medicamento',
      timestamps: false
    }
  }
}

module.exports = {
  Medicamento,
  MedicamentoSchema,
  MEDICAMENTO_TABLE
}
