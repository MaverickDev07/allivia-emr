import { datosExcel } from '../utils/readMedicamentosXLSX'
import { models } from '../lib/sequelize'

class MedicamentoService {
  async llenarDatosMedicamentos() {
    // Return Medicamentos guardados.
    for ( let row of datosExcel() ) {
      await models.Medicamento.create(row, {
        fields: Object.keys(row)
      })
    }
    
    return datosExcel()
  }

  async find(query = {}) {
    // Listar por Paginación los Medicamentos
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
    const response = await models.Medicamento.findAll(options)

    return response
  }

}

export default MedicamentoService
