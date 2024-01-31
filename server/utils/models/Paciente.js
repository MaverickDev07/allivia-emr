import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const AppPaciente = PostgreSQL.connect().define('AppPaciente', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  usuario_id: {
    type: Sequelize.INTEGER
  },
  descripcion: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_paciente'
})

export default AppPaciente
