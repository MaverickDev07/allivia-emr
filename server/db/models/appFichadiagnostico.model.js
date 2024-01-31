import { Model, DataTypes, Sequelize } from 'sequelize'
import { FICHAMEDICA_TABLE } from './appFichamedica.model'

const FICHADIAGNOSTICO_TABLE = 'app_fichadiagnostico'

const FichaDiagnosticoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fichamedicaId: {
    field: 'id_fichamedica',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FICHAMEDICA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  descripcion: {
    type: DataTypes.STRING
  }
}

class FichaDiagnostico extends Model {
  static associate(models) {
    this.belongsTo(models.FichaMedica, { as: 'fichamedica' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FICHADIAGNOSTICO_TABLE,
      modelName: 'FichaDiagnostico',
      timestamps: false
    }
  }
}

module.exports = {
  FichaDiagnostico,
  FichaDiagnosticoSchema,
  FICHADIAGNOSTICO_TABLE
}
