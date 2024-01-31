import { Model, DataTypes, Sequelize } from 'sequelize'

const FARMACIASPACIENTE_TABLE = 'web_farmaciaspaciente'

const FarmaciasPacienteSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  foto: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING
  },
  edad: {
    type: DataTypes.STRING
  },
  fecha_envio: {
    type: DataTypes.STRING
  },
  solicitud: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.STRING
  },
  id_agendacita: {
    type: DataTypes.INTEGER
  },
  id_paciente: {
    type: DataTypes.INTEGER
  },
  id_detalleenvio: {
    type: DataTypes.INTEGER
  }
}

class FarmaciasPaciente extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FARMACIASPACIENTE_TABLE,
      modelName: 'FarmaciasPaciente',
      timestamps: false
    }
  }
}

module.exports = {
  FarmaciasPaciente,
  FarmaciasPacienteSchema,
  FARMACIASPACIENTE_TABLE
}
