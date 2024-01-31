import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

// const WebLaboratoriosPaciente = PostgreSQL.connect().define('web_laboratoriospaciente',
const WebLaboratoriosPaciente = PostgreSQL.connect().define('web_laboratoriospacientepremium',
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
    fecha: {
      type: Sequelize.TEXT
    },
    solicitud: {
      type: Sequelize.TEXT
    },
    estado: {
      type: Sequelize.TEXT
    },
    suscripcion: {
      type: Sequelize.TEXT
    },
    id_paciente: {
      type: Sequelize.INTEGER
    },
    id_laboratorios_paciente: {
      type: Sequelize.INTEGER
    },
    id_wusuario: {
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'web_laboratoriospacientepremium'
  }
)

export default WebLaboratoriosPaciente
