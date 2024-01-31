// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const CIRUGIA_TABLE = 'app_cirugia'

const CirugiaSchema = {
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

class Cirugia extends Model {
  static associate(models) {
    this.hasMany(models.AntecedenteCirugia, {
      as: 'antecedenteCirugia',
      foreignKey: 'cirugiaId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CIRUGIA_TABLE,
      modelName: 'Cirugia',
      timestamps: false
    }
  }
}

module.exports = {
  Cirugia,
  CirugiaSchema,
  CIRUGIA_TABLE
}
