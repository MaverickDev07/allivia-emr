import { models } from '../lib/sequelize'

class FichaMedicamentosService {
  async find(query = {}) {
    // Listar por Paginación
    const { limit, offset, sort } = query
    const options = {
      where: {},
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
    const response = await models.FichaMedicamentos.findAll(options)

    return response
  }

  async create( _data ) {
    // Return data
    const data = await models.FichaMedicamentos.create(_data, {
      fields: Object.keys(_data)
    })
    if (data)
      return {
        message: 'Medicamento agregado satisfactoriamente',
        data
      }
    else return { message: 'Error: no se pudo agregar el medicamento', data: {} }
  }

}

export default FichaMedicamentosService
