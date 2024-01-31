// import { Model, DataTypes, Sequelize } from 'sequelize'
const { Model, DataTypes, Sequelize } = require('sequelize')

const USUARIO_TABLE = 'app_usuario'

const UsuarioSchema = {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  descricpion: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  carnet: {
    type: DataTypes.STRING
  },
  fecha_nacimiento: {
    type: DataTypes.STRING
  },
  path: {
    type: DataTypes.STRING
  },
  usuario: {
    type: DataTypes.STRING
  },
  pin_password: {
    type: DataTypes.TEXT
  },
  estado: {
    type: DataTypes.STRING
  },
  creado: {
    type: DataTypes.DATE
  },
  creado_por: {
    type: DataTypes.STRING
  },
  modificado: {
    type: DataTypes.DATE
  },
  modificado_por: {
    type: DataTypes.STRING
  },
  reestablecer_password: {
    type: DataTypes.BOOLEAN
  },
  grupo_id: {
    type: DataTypes.INTEGER
  },
  fecha_fin: {
    type: DataTypes.DATE
  },
  tipo_autenticacion_id: {
    type: DataTypes.INTEGER
  },
  password_valido_hasta: {
    type: DataTypes.DATE
  },
  genero: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  nombrearchivo: {
    type: DataTypes.STRING
  },
  id_device: {
    type: DataTypes.STRING
  },
  revision: {
    type: DataTypes.BOOLEAN
  },
  token: {
    type: DataTypes.STRING
  },
  /*access_token: {
    type: DataTypes.STRING
  },
  devices: {
    type: DataTypes.ARRAY(DataTypes.BLOB)
  }*/
}

class Usuario extends Model {
  static associate(models) {
    this.hasMany(models.Paciente, {
      as: 'paciente',
      foreignKey: 'usuarioId'
    })
    this.hasMany(models.Doctor, {
      as: 'doctor',
      foreignKey: 'usuarioId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}

module.exports = {
  Usuario,
  UsuarioSchema,
  USUARIO_TABLE
}
