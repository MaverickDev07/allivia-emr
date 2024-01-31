import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const AppDoctor = PostgreSQL.connect().define('AppDoctor', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  usuario_id: {
    type: Sequelize.INTEGER
  },
  descripcion: {
    type: Sequelize.TEXT
  },
  pais: {
    type: Sequelize.TEXT
  },
  adjunto: {
    //type: Sequelize.BINARY
    type: Sequelize.TEXT
  },
  recomendacion: {
    type: Sequelize.TEXT
  },
  biografia: {
    type: Sequelize.TEXT
  },
  pacientes: {
    type: Sequelize.TEXT
  },
  experiencia: {
    type: Sequelize.TEXT
  },
  path: {
    type: Sequelize.TEXT
  },
  nombrearchivo: {
    type: Sequelize.TEXT
  },
  tipo_doctor: {
    type: Sequelize.TEXT
  }
  /*,
  firma: {
    type: Sequelize.TEXT
  }*/
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_doctor'
})

export default AppDoctor
