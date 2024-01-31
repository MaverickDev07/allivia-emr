// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const ENFERMEDADBASE_TABLE = 'app_enfermedad_base'

const EnfermedadBaseSchema = {
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

class EnfermedadBase extends Model {
  static associate(models) {
    this.hasMany(models.AntecedenteEnfermedadBase, {
      as: 'antecedenteEnfermedadBase',
      foreignKey: 'enfermedadBaseId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ENFERMEDADBASE_TABLE,
      modelName: 'EnfermedadBase',
      timestamps: false
    }
  }
}

module.exports = {
  EnfermedadBase,
  EnfermedadBaseSchema,
  ENFERMEDADBASE_TABLE
}
