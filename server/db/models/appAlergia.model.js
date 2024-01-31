// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const ALERGIA_TABLE = 'app_alergia'

const AlergiaSchema = {
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

class Alergia extends Model {
  static associate(models) {
    this.hasMany(models.AntecedenteAlergia, {
      as: 'antecedenteAlergia',
      foreignKey: 'alergiaId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ALERGIA_TABLE,
      modelName: 'Alergia',
      timestamps: false
    }
  }
}

module.exports = {
  Alergia,
  AlergiaSchema,
  ALERGIA_TABLE
}
