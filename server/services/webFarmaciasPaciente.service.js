import { Op } from 'sequelize'
import { models } from '../lib/sequelize'
import { calculateAge } from '../utils/plus'

class FarmaciasPacienteService {
  constructor() {}

  async find(query = {}) {
    // Listar por Paginación y/o estado
    const options = {
      where: {}
    }
    const { limit, offset } = query
    let { estado } = query
    if (estado)
      if ( !Array.isArray(estado) )
        estado = [estado]
      else
        estado.push(null)

    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }
    if (estado)
      options.where.estado = { [Op.or]: estado }

    // Aplicamos filtros
    const response = await models.FarmaciasPaciente.findAll(options)

    if ( response.length > 0 )
      response.forEach(async row => {
        row.dataValues['foto'] = `http://104.154.164.119:8080/api/downloadFile/PACIENTE/${row.dataValues['foto']}`
        row.dataValues['edad'] = calculateAge(row.dataValues['edad'], new Date())
      })

    return response
  }
}

export default FarmaciasPacienteService
