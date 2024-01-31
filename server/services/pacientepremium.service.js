import { crearExcel } from '../utils/writeFileXLSX'
import { models } from '../lib/sequelize'

class PacientePremium {
  async getPacientesPremium() {
    // Return array
    const response = await models.PacientePremium.findAll()
    return crearExcel(response)
  }
}

export default PacientePremium
