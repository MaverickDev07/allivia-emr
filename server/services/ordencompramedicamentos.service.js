import { models } from '../lib/sequelize'

class OrdenCompraMedicamentosService {
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
    const response = await models.OrdenCompraMedicamentos.findAll(options)

    return response
  }

  async create( _data ) {
    // Return data
    const { detalleenvioId } = _data
    const detalleEnvio = await models.DetalleEnvio.findByPk(detalleenvioId)

    if (!detalleEnvio)
      throw 'Detalle Envio no encontrado'
    if (detalleEnvio['estado'] == 'Finalizado')
      throw 'Ya se realizó la orden de compra anteriormente'

    const data = await models.OrdenCompraMedicamentos.create(_data, {
      fields: Object.keys(_data)
    })

    detalleEnvio.update({ estado: 'Finalizado' }, {
      where: { id: detalleenvioId }
    })

    return data
  }

}

export default OrdenCompraMedicamentosService
