import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const WebPermisos = PostgreSQL.connect().define('WebPermisos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'web_permisos'
})

export default WebPermisos
