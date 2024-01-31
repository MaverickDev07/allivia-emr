import { models } from '../lib/sequelize'

class PropiedadService {
  async findByPacienteId(pacienteId, query = {}) {
    // Listar por Paginación
    const { limit, offset, sort } = query
    const options = {
      where: { pacienteId },
      order: []
    }

    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }
    if (sort) {
      options.order.push(sort.split(','))
    }

    // Aplicamos filtros
    return await models.Propiedad.findAll(options)
  }

  async create( data ) {
    // Return data created
    return await models.Propiedad.create(data, {
      fields: Object.keys( data )
    })
  }

}

export default PropiedadService
