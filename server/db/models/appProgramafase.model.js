// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const PROGRAMAFASE_TABLE = 'app_programafase'

const ProgramaFaseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_programa: {
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  },
  eliminado: {
    type: DataTypes.BOOLEAN
  }
}

class ProgramaFase extends Model {
  static associate(models) {
    /*this.hasMany(models.FichaMedica, {
      as: 'fichaMedica',
      foreignKey: 'idProgramafase'
    })*/
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROGRAMAFASE_TABLE,
      modelName: 'ProgramaFase',
      timestamps: false
    }
  }
}

module.exports = {
  ProgramaFase,
  ProgramaFaseSchema,
  PROGRAMAFASE_TABLE
}
