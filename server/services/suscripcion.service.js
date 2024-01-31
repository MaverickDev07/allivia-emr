import { models } from '../lib/sequelize'

class SuscripcionService {
  async getSuscripcionById(id) {
    return await models.Suscripcion.findByPk(id)
  }
}

export default SuscripcionService
