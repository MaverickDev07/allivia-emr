import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'
import WebUsuario from 'WebUsuario'

const PostgreSQL = new PostgresqlLib()

const WebRoles = PostgreSQL.connect().define('WebRoles', {
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
  tableName: 'web_roles'
})

// 1aN Un rol pertenece a muchos roles
WebRoles.hasMany(WebUsuario, { foreingKey: 'rol_id', sourceKey: 'id' })
// Muchos usuarios tienen un solo rol
WebUsuario.belongsTo(WebRoles, { foreingKey: 'rol_id', sourceKey: 'id' })

export default WebRoles
