import { Model, DataTypes, Sequelize } from 'sequelize'

const TIPOCITA_TABLE = 'app_tipocita'

const TipoCitaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  }
}

class TipoCita extends Model {
  static associate(models) {
    this.hasMany(models.AgendaCita, {
      as: 'agendacita',
      foreignKey: 'tipocitaId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPOCITA_TABLE,
      modelName: 'TipoCita',
      timestamps: false
    }
  }
}

module.exports = {
  TipoCita,
  TipoCitaSchema,
  TIPOCITA_TABLE
}
