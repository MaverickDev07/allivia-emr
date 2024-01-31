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
  id_especialidad: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_doctoresespecialidades'
})

export default AppDoctoresEspecialidades
