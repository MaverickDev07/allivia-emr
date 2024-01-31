// import { Model, DataTypes, Sequelize } from 'sequelize'
// import { USUARIO_TABLE } from './appUsuario.model'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { USUARIO_TABLE } = require('./appUsuario.model')

const DOCTOR_TABLE = 'app_doctor'

const DoctorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    field: 'usuario_id',
    allowNull: false,
    references: {
      model: USUARIO_TABLE,
      key: 'usuario_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  descripcion: {
    type: DataTypes.STRING
  },
  pais: {
    type: DataTypes.STRING
  },
  adjunto: {
    type: DataTypes.BLOB
  },
  recomendacion: {
    type: DataTypes.INTEGER
  },
  biografia: {
    type: DataTypes.STRING
  },
  pacientes: {
    type: DataTypes.STRING
  },
  experiencia: {
    type: DataTypes.STRING
  },
  path: {
    type: DataTypes.STRING
  },
  nombrearchivo: {
    type: DataTypes.STRING
  },
  tipo_doctor: {
    type: DataTypes.STRING
  },
  firma: {
    type: DataTypes.STRING
  }
}

class Doctor extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: 'usuarioId',
      as: 'usuario'
    })
    this.hasMany(models.AgendaCita, {
      as: 'agendacita',
      foreignKey: 'doctorId'
    })
    this.hasMany(models.DoctoresEspecialidades, {
      as: 'doctoresespecialidades',
      foreignKey: 'doctorId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCTOR_TABLE,
      modelName: 'Doctor',
      timestamps: false
    }
  }
}

module.exports = {
  Doctor,
  DoctorSchema,
  DOCTOR_TABLE
}
