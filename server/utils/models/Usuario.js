import Sequelize from 'sequelize'
import PostgresqlLib from '../../lib/postgresql'

// import AppEspecialidad from './Especialidad'

const PostgreSQL = new PostgresqlLib()

const AppUsuario = PostgreSQL.connect().define('AppUsuario', {
  descricpion: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  },
  nombre: {
    type: Sequelize.TEXT
  },
  apellido: {
    type: Sequelize.TEXT
  },
  carnet: {
    type: Sequelize.TEXT
  },
  fecha_nacimiento: {
    type: Sequelize.TEXT
  },
  path: {
    type: Sequelize.TEXT
  },
  usuario: {
    type: Sequelize.TEXT
  },
  pin_password: {
    type: Sequelize.TEXT
  },
  estado: {
    type: Sequelize.TEXT
  },
  creado: {
    type: Sequelize.DATE
  },
  creado_por: {
    type: Sequelize.TEXT
  },
  modificado: {
    type: Sequelize.DATE
  },
  modificado_por: {
    type: Sequelize.TEXT
  },
  reestablecer_password: {
    type: Sequelize.BOOLEAN
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  grupo_id: {
    type: Sequelize.INTEGER
  },
  fecha_fin: {
    type: Sequelize.DATE
  },
  tipo_autenticacion_id: {
    type: Sequelize.INTEGER
  },
  password_valido_hasta: {
    type: Sequelize.DATE
  },
  genero: {
    type: Sequelize.CHAR
  },
  direccion: {
    type: Sequelize.TEXT
  },
  telefono: {
    type: Sequelize.TEXT
  },
  nombrearchivo: {
    type: Sequelize.TEXT
  },
  id_device: {
    type: Sequelize.TEXT
  },
  revision: {
    type: Sequelize.BOOLEAN
  },
  token: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'app_usuario'
})

// AppUsuario.belongsToMany(AppEspecialidad, { through: "app_doctoresespecialidades" })

export default AppUsuario
