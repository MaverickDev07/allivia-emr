// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const VACUNA_TABLE = 'app_vacuna'

const VacunaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  },
  eliminado: {
    type: DataTypes.BOOLEAN
  }
}

class Vacuna extends Model {
  static associate(models) {
    this.hasMany(models.AntecedenteVacuna, {
      as: 'antecedenteVacuna',
      foreignKey: 'vacunaId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: VACUNA_TABLE,
      modelName: 'Vacuna',
      timestamps: false
    }
  }
}

module.exports = {
  Vacuna,
  VacunaSchema,
  VACUNA_TABLE
}
