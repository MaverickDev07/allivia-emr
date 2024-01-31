import boom from 'boom'
import { models } from '../lib/sequelize'

class FichaLaboratoriosService {
  constructor() {}

  async create(data) {
    const response = await models.FichaLaboratorios.create(data)
    return response
  }

  async find() {
    const response = await models.FichaLaboratorios.findAll()
    return response
  }

  async findOne(id) {
    const response = await models.FichaLaboratorios.findByPk(id)
    return response
  }

  async update(id, changes) {
    const model = await models.FichaLaboratorios.findByPk(id)
    const response = await model.update(changes)
    return response
  }
}

export default FichaLaboratoriosService
