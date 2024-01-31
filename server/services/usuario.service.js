import Usuario from '../utils/models/Usuario'

class UsuarioService {
  async getUsuarios() {
    // Return array
    return await Usuario.findAll()
  }

  async getOneUsuario(id) {
    // Return array
    return await Usuario.findOne({
      where: { id }
    })
  }

  async getOneUsuarioByUsuario(usuario) {
    // Return array
    return await Usuario.findOne({
      where: { usuario }
    })
  }

  async getOneUsuarioIdDevice(id) {
    // Return array
    return await Usuario.findOne({
      where: { usuario_id: id },
      attributes: ['id_device']
    })
  }

  async createUsuario(data) {
    // Return User
    const newUsuario = await Usuario.create(data)
    if (newUsuario) {
      return newUsuario
    }
  }

  async updateUsuarioProfile(data) {
    // Return User
    if(data['usuario_id']) {
      console.log('Update Joo', data)
      const usuario = await Usuario.findOne({
        where: { usuario_id: data['usuario_id'] }
      })
      await usuario.update(data)
      return await usuario.save()
    } else return null
  }

  /*async updateUser({ id, data }) {
    // Return UserId
    return await this.mongoDB.update(this.collection, id, data)
  }

  async deleteUser(id) {
    // Return deletedUserId
    return await this.mongoDB.delete(this.collection, id)
  }*/
}

export default UsuarioService
