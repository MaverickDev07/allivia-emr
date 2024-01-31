import { Model, DataTypes, Sequelize } from 'sequelize'

const ESPECIALIDAD_TABLE = 'app_especialidad'

const EspecialidadSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  },
  eliminado: {
    type: DataTypes.BOOLEAN
  }
}

class Especialidad extends Model {
  static associate(models) {
    this.hasMany(models.DoctoresEspecialidades, {
      as: 'doctoresespecialidades',
      foreignKey: 'especialidadId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ESPECIALIDAD_TABLE,
      modelName: 'Especialidad',
      timestamps: false
    }
  }
}

module.exports = {
  Especialidad,
  EspecialidadSchema,
  ESPECIALIDAD_TABLE
}
