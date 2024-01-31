// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const LABORATORIOSPACIENTE_TABLE = 'app_laboratorios_paciente'

const LaboratoriosPacienteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_paciente: {
    type: DataTypes.INTEGER
  },
  id_laboratorio_empresa: {
    type: DataTypes.INTEGER
  },
  id_archivolaboratorios: {
    type: DataTypes.INTEGER
  },
  id_wusuario: {
    type: DataTypes.INTEGER
  },
  creado: {
    type: DataTypes.DATE
  },
  modificado: {
    type: DataTypes.DATE
  },
  estado: {
    type: DataTypes.STRING
  }
}

class LaboratoriosPaciente extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LABORATORIOSPACIENTE_TABLE,
      modelName: 'LaboratoriosPaciente',
      timestamps: false
    }
  }
}

module.exports = {
  LaboratoriosPaciente,
  LaboratoriosPacienteSchema,
  LABORATORIOSPACIENTE_TABLE
}
