import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const AppTitulo = PostgreSQL.connect().define('AppTitulo', {
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
  tableName: 'app_titulo'
})

export default AppTitulo
