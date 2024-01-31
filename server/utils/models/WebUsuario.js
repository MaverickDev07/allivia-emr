import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const WebUsuario = PostgreSQL.connect().define('WebUsuario', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.TEXT
  },
  rol_id: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'web_usuario'
})

export default WebUsuario
