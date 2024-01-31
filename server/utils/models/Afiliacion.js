import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const AppAfiliacion = PostgreSQL.connect().define('AppAfiliacion', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  descripcion: {
    type: Sequelize.TEXT
  },
  telefono: {
    type: Sequelize.TEXT
  },
  eliminado: {
    type: Sequelize.BOOLEAN
  },
  latitud: {
    type: Sequelize.TEXT
  },
  longitud: {
    type: Sequelize.TEXT
  },
  direccion: {
    type: Sequelize.TEXT
  },
  web: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_afiliaciones'
})

export default AppAfiliacion
