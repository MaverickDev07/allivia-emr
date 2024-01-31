// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')
const ARCHIVOLABORATORIOS_TABLE = 'app_archivolaboratorios'

const ArchivoLaboratoriosSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  archivo: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class ArchivoLaboratorios extends Model {
  static associate(models) {
    /*this.belongsTo(models.User, {as: 'user'})
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    })*/
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ARCHIVOLABORATORIOS_TABLE,
      modelName: 'ArchivoLaboratorios',
      timestamps: false
    }
  }
}

module.exports = {
  ArchivoLaboratorios,
  ArchivoLaboratoriosSchema,
  ARCHIVOLABORATORIOS_TABLE
}
