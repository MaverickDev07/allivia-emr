import { Model, DataTypes, Sequelize } from 'sequelize'
import { DOCTOR_TABLE } from './appDoctor.model'
import { ESPECIALIDAD_TABLE } from './appEspecialidad.model'

const DOCTORESESPECIALIDADES_TABLE = 'app_doctoresespecialidades'

const DoctoresEspecialidadesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  doctorId: {
    type: DataTypes.INTEGER,
    field: 'id_doctor',
    allowNull: false,
    references: {
      model: DOCTOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  especialidadId: {
    type: DataTypes.INTEGER,
    field: 'id_especialidad',
    allowNull: false,
    references: {
      model: ESPECIALIDAD_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  }
}

class DoctoresEspecialidades extends Model {
  static associate(models) {
    this.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      as: 'doctor'
    })
    this.belongsTo(models.Especialidad, {
      foreignKey: 'especialidadId',
      as: 'especialidad'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCTORESESPECIALIDADES_TABLE,
      modelName: 'DoctoresEspecialidades',
      timestamps: false
    }
  }
}

module.exports = {
  DoctoresEspecialidades,
  DoctoresEspecialidadesSchema,
  DOCTORESESPECIALIDADES_TABLE
}
