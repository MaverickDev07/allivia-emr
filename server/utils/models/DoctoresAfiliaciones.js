import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const AppDoctoresAfiliaciones = PostgreSQL.connect().define('AppDoctoresAfiliaciones', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  id_doctor: {
    type: Sequelize.INTEGER
  },
  id_afiliaciones: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_doctorafiliaciones'
})

export default AppDoctoresAfiliaciones
