import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const AppDoctoresEspecialidades = PostgreSQL.connect().define('AppDoctoresEspecialidades', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  id_doctor: {
    type: Sequelize.INTEGER
  },
  educacion: {
    type: Sequelize.TEXT
  },
  idtitulo: {
    type: Sequelize.INTEGER
  },
  annio: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_doctoreducacion'
})

export default AppDoctoresEspecialidades
