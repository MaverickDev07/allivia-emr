import { Model, DataTypes, Sequelize } from 'sequelize'

const TIPOCONSULTA_TABLE = 'app_tipoconsulta'

const TipoConsultaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  },
  tipo: {
    type: DataTypes.STRING
  },
  eliminado: {
    type: DataTypes.BOOLEAN
  },
  codigo: {
    type: DataTypes.STRING
  }
}

class TipoConsulta extends Model {
  static associate(models) {
    this.hasMany(models.AgendaCita, {
      as: 'agendacita',
      foreignKey: 'tipoconsultaId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPOCONSULTA_TABLE,
      modelName: 'TipoConsulta',
      timestamps: false
    }
  }
}

module.exports = {
  TipoConsulta,
  TipoConsultaSchema,
  TIPOCONSULTA_TABLE
}
