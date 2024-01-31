import boom from 'boom'
import { models } from '../lib/sequelize'

class ArchivoLaboratoriosService {
  constructor() {}

  async create(data) {
    const response = await models.ArchivoLaboratorios.create(data)
    return response
  }

  async find() {
    const response = await models.ArchivoLaboratorios.findAll()
    return response
  }

  async findOne(id) {
    const response = await models.ArchivoLaboratorios.findByPk(id)
    return response
  }

  async update(id, changes) {
    const model = await models.ArchivoLaboratorios.findByPk(id)
    const response = await model.update(changes)
    return response
  }
}

export default ArchivoLaboratoriosService
