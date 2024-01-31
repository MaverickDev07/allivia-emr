// import { Model, DataTypes, Sequelize } from 'sequelize'
// import { AGENDACITA_TABLE } from './appAgendacita.model'
const { Model, DataTypes, Sequelize } = require('sequelize')
const { AGENDACITA_TABLE } = require('./appAgendacita.model')

const DETALLEENVIO_TABLE = 'app_detalle_envio'

const DetalleEnvioSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  creado: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  modificado: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  direccion_envio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  indicacion: {
    type: DataTypes.STRING
  },
  latitud: {
    type: DataTypes.STRING
  },
  longitud: {
    type: DataTypes.STRING
  },
  numero_casa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  agendacitaId: {
    type: DataTypes.INTEGER,
    field: 'id_agenda_cita',
    allowNull: false,
    references: {
      model: AGENDACITA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  entidadmedicaId: {
    type: DataTypes.INTEGER,
    field: 'id_entidad_medica',
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'Pendiente'
  }
}

class DetalleEnvio extends Model {
  static associate(models) {
    this.belongsTo(models.AgendaCita, { as: 'agendacita' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DETALLEENVIO_TABLE,
      modelName: 'DetalleEnvio',
      timestamps: false
    }
  }
}

module.exports = {
  DetalleEnvio,
  DetalleEnvioSchema,
  DETALLEENVIO_TABLE
}
