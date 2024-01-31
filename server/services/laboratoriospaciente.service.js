import { models } from '../lib/sequelize'

class LaboratoriosPacienteService {
  constructor() {}

  async create(data) {
    const response = await models.LaboratoriosPaciente.create(data)
    return response
  }

  async find() {
    const response = await models.LaboratoriosPaciente.findAll()
    return response
  }

  async findOne(id) {
    const response = await models.LaboratoriosPaciente.findByPk(id)
    return response
  }

  async update(id, changes) {
    const model = await models.LaboratoriosPaciente.findByPk(id)
    const response = await model.update(changes)
    return response
  }
}

export default LaboratoriosPacienteService
