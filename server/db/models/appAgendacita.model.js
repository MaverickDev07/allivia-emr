// import { Model, DataTypes, Sequelize } from 'sequelize'
// import { PACIENTE_TABLE } from './appPaciente.model'
// import { DOCTOR_TABLE } from './appDoctor.model'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { PACIENTE_TABLE } = require('./appPaciente.model')
const { DOCTOR_TABLE } = require('./appDoctor.model')
const { PAGO_TABLE } = require('./appPago.model')

const AGENDACITA_TABLE = 'app_agendacita'

const AgendaCitaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
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
  tipocitaId: {
    type: DataTypes.INTEGER,
    field: 'id_tipocita'
  },
  pagoId: {
    type: DataTypes.INTEGER,
    field: 'id_pago',
    allowNull: false,
    references: {
      model: PAGO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  tipoconsultaId: {
    type: DataTypes.INTEGER,
    field: 'id_tipoconsulta'
  },
  especialidadId: {
    type: DataTypes.INTEGER,
    field: 'id_especialidad'
  },
  fecha: {
    type: DataTypes.STRING
  },
  inicioconsulta: {
    type: DataTypes.STRING
  },
  finconsulta: {
    type: DataTypes.STRING
  },
  estadoconsulta: {
    type: DataTypes.STRING
  },
  motivoconsulta: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.DOUBLE
  },
  motivocancelacion: {
    type: DataTypes.STRING
  },
  tipoespecialidad: {
    type: DataTypes.STRING
  },
  horario: {
    type: DataTypes.STRING
  },
  reconsulta: {
    type: DataTypes.BOOLEAN
  },
  fecharegistro: {
    type: DataTypes.DATE
  },
  nit_comprador: {
    type: DataTypes.STRING
  },
  razon_social: {
    type: DataTypes.STRING
  },
  tipo_agenda: {
    type: DataTypes.STRING
  }
}

class AgendaCita extends Model {
  static associate(models) {
    this.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    })
    this.belongsTo(models.Doctor, {
      foreignKey: 'doctorId',
      as: 'doctor'
    })
    this.belongsTo(models.TipoCita, {
      foreignKey: 'tipocitaId',
      as: 'tipocita'
    })
    this.belongsTo(models.TipoConsulta, {
      foreignKey: 'tipoconsultaId',
      as: 'tipoconsulta'
    })
    this.hasMany(models.FichaMedica, {
      as: 'fichamedica',
      foreignKey: 'agendacitaId'
    })
    this.hasMany(models.DetalleEnvio, {
      as: 'detalleenvio',
      foreignKey: 'agendacitaId'
    })
    this.belongsTo(models.Pago, {
      foreignKey: 'pagoId',
      as: 'pago'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AGENDACITA_TABLE,
      modelName: 'AgendaCita',
      timestamps: false
    }
  }
}

module.exports = {
  AgendaCita,
  AgendaCitaSchema,
  AGENDACITA_TABLE
}
