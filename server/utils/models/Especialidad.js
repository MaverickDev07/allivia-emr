import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

// import AppUsuario from './Usuario'

const PostgreSQL = new PostgresqlLib()

const AppEspecialidad = PostgreSQL.connect().define('AppEspecialidad', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  descripcion: {
    type: Sequelize.TEXT
  },
  eliminado: {
    type: Sequelize.BOOLEAN
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_especialidad'
})

// AppEspecialidad.belongsToMany(AppUsuario, { through: "app_doctoresespecialidades" })

export default AppEspecialidad
