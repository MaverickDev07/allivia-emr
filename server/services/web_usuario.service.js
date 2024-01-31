import WebUsuario from '../utils/models/WebUsuario'
import { models } from '../lib/sequelize'
import bcrypt from 'bcrypt'

class WebUsuarioService {
  async getUsuarios() {
    // Return array
    const options = {
      include: [
        {
          model: models.WebRol,
          as: 'wrol'
        }
      ],
      where: {}
    }
    return await models.WebUsuario.findAll(options)
  }

  async getOneUsuario(id) {
    // Return array
    return await WebUsuario.findOne({
      where: { id }
    })
  }

  async hasUsuario(email) {
    const usuario = await WebUsuario.findOne({
      where: { email }
    })

    return usuario && usuario
  }

  async createUsuario( data ) {
    // Return Usuario
    if (await this.hasUsuario(data['email']))
      return { message: "Error: Usuario ya existente", data: {} }

    data['password'] = await bcrypt.hash(data['password'], 10)
    const newUsuario = await WebUsuario.create(data, {
      fields: Object.keys(data)
    })
    if (newUsuario)
      return {
        message: 'Usuario creado satisfactoriamente',
        data: newUsuario
      }
    else return { message: "Error: no se pudo crear usuario", data: {} }
  }

  async updateUsuario( id, data ) {
    // Return Usuario
    const find_usuario = await WebUsuario.findOne({
      where: { id }
    })

    if ( find_usuario ) {
      const usuario = await find_usuario.update(data)

      return { message: 'Usuario actualizado satisfactoriamente', data: usuario }
    }
    else return { message: `Error: No se encontró un usuario con id: ${id}`, data: {} }
  }

  async deleteUsuario( id ) {
    // Return deletedUsuario count
    const data = await WebUsuario.destroy({
      where: { id }
    })

    if( data > 0 ) return { message: 'Usuario eliminado satisfactoriamente', data }
    else return { message: `Error: No se encontró un usuario con id: ${id}`, data: {} }
  }
}

export default WebUsuarioService
