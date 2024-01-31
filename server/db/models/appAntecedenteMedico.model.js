// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { PACIENTE_TABLE } = require('./appPaciente.model')

const ANTECEDENTEMEDICO_TABLE = 'app_antecedente_medico'

const AntecedenteMedicoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  genero: {
    type: DataTypes.STRING
  },
  fecha_nacimiento: {
    type: DataTypes.STRING
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    field: 'id_paciente',
    allowNull: false,
    references: {
      model: PACIENTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  fuma: {
    type: DataTypes.INTEGER
  },
  alcohol: {
    type: DataTypes.INTEGER
  },
  cafeina: {
    type: DataTypes.INTEGER
  },
  ejercicio: {
    type: DataTypes.INTEGER
  },
  drogas: {
    type: DataTypes.INTEGER
  },
  testifico: {
    type: DataTypes.BOOLEAN
  },
  miniMentalTest: {
    type: DataTypes.JSON,
    field: 'mini_mental_test'
  },
  cabeza: {
    type: DataTypes.JSON
  },
  cuello: {
    type: DataTypes.JSON
  },
  toraxAnterior: {
    type: DataTypes.JSON,
    field: 'torax_anterior'
  },
  toraxPosterior: {
    type: DataTypes.JSON,
    field: 'torax_posterior'
  },
  abdomen: {
    type: DataTypes.JSON
  },
  sistemaNerviosoPerfiferico: {
    type: DataTypes.JSON,
    field: 'sistema_nervioso_perfiferico'
  },
  sistemaNerviosoMotor: {
    type: DataTypes.JSON,
    field: 'sistema_nervioso_motor'
  },
  extremidades: {
    type: DataTypes.JSON
  },
  categorizacionPaciente: {
    type: DataTypes.STRING,
    field: 'categorizacion_paciente'
  },
  ultimoDiagnostico: {
    type: DataTypes.STRING,
    field: 'ultimo_diagnostico'
  }
}

class AntecedenteMedico extends Model {
  static associate(models) {
    this.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    })

    this.hasMany(models.AntecedenteAlergia, {
      as: 'antecedenteAlergia',
      foreignKey: 'antecedenteMedicoId'
    })
    this.hasMany(models.AntecedenteCirugia, {
      as: 'antecedenteCirugia',
      foreignKey: 'antecedenteMedicoId'
    })
    this.hasMany(models.AntecedenteEnfermedadBase, {
      as: 'antecedenteEnfermedadBase',
      foreignKey: 'antecedenteMedicoId'
    })
    this.hasMany(models.AntecedenteFamilia, {
      as: 'antecedenteFamilia',
      foreignKey: 'antecedenteMedicoId'
    })
    this.hasMany(models.AntecedenteVacuna, {
      as: 'antecedenteVacuna',
      foreignKey: 'antecedenteMedicoId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ANTECEDENTEMEDICO_TABLE,
      modelName: 'AntecedenteMedico',
      timestamps: false
    }
  }
}

module.exports = {
  AntecedenteMedico,
  AntecedenteMedicoSchema,
  ANTECEDENTEMEDICO_TABLE
}
