import { Model, DataTypes, Sequelize } from 'sequelize'

const PAGO_TABLE = 'app_pago'

const PagoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  transaccion: {
    type: DataTypes.STRING
  },
  detalle: {
    type: DataTypes.STRING
  },
  monto: {
    type: DataTypes.STRING
  },
  tipo: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.STRING
  },
}

class Pago extends Model {
  static associate(models) {
    this.hasMany(models.AgendaCita, {
      as: 'agendacita',
      foreignKey: 'pagoId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PAGO_TABLE,
      modelName: 'Pago',
      timestamps: false
    }
  }
}

module.exports = {
  Pago,
  PagoSchema,
  PAGO_TABLE
}
