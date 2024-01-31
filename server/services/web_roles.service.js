import WebRoles from '../utils/models/WebRoles'

class WebRolesService {
  async getPermisos() {
    // Return array
    return await WebRoles.findAll()
  }

  async getOnePermiso( id ) {
    // Return array
    return await WebRoles.findOne({
      where: { id }
    })
  }

  async createPermiso( data ) {
    // Return Permiso
    const newPermiso = await WebRoles.create(data, {
      fields: Object.keys(data)
    })
    if ( newPermiso )
      return {
        message: 'Permiso creado satisfactoriamente',
        data: newPermiso
      }
    else return { message: 'Error: no se pudo crear permiso', data: {} }
  }

  async updatePermiso( id, data ) {
    // Return Permiso
    const find_permiso = await WebRoles.findOne({
      where: { id }
    })

    if ( find_permiso ) {
      const permiso = await find_permiso.update(data)

      return { message: 'Permiso actualizado satisfactoriamente', data: permiso }
    }
    else return { message: `Error: No se encontró un permiso con id: ${id}`, data: {} }
  }

  async deletePermiso( id ) {
    // Return deletedPermiso count
    const data = await WebRoles.destroy({
      where: { id }
    })

    if( data > 0 ) return { message: 'Permiso eliminado satisfactoriamente', data }
    else return { message: `Error: No se encontró un permiso con id: ${id}`, data: {} }
  }
}

export default WebRolesService
