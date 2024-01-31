import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const SalaEspera = PostgreSQL.connect().define('sala_espera',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    foto: {
      type: Sequelize.TEXT
    },
    nombre: {
      type: Sequelize.TEXT
    },
    edad: {
      type: Sequelize.TEXT
    },
    tipocita: {
      type: Sequelize.TEXT
    },
    fecha: {
      type: Sequelize.TEXT
    },
    estadoconsulta: {
      type: Sequelize.TEXT
    },
    id_paciente: {
      type: Sequelize.INTEGER
    },
    id_doctor: {
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'sala_espera'
  }
)

export default SalaEspera
