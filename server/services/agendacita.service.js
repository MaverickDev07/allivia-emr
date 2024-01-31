import boom from 'boom'
import { models } from '../lib/sequelize'

class AgendaCitaService {
  constructor() {}

  async find() {
    const data = await models.AgendaCita.findAll() // { attributes: ['fecha', 'inicioconsulta'] }
    return data
  }
}

module.exports = AgendaCitaService
