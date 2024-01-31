import { Model, DataTypes, Sequelize } from 'sequelize'

const FICHALABORATORIOS_TABLE = 'app_fichalaboratorios'

const FichaLaboratoriosSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_fichamedica: {
    type: DataTypes.INTEGER
  },
  id_laboratorios: {
    type: DataTypes.INTEGER
  },
  id_laboratorio_empresa: {
    type: DataTypes.INTEGER
  },
  id_archivolaboratorios: {
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.STRING
  }
}

class FichaLaboratorios extends Model {
  static associate(models) {
    /*this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'FichaLaboratoriosId'
    })*/
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FICHALABORATORIOS_TABLE,
      modelName: 'FichaLaboratorios',
      timestamps: false
    }
  }
}

module.exports = {
  FichaLaboratorios,
  FichaLaboratoriosSchema,
  FICHALABORATORIOS_TABLE
}
