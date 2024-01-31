import Afiliacion from '../utils/models/Afiliacion'

class AfiliacionService {
  async getAfiliaciones() {
    // Return array
    return await Afiliacion.findAll()
  }
}

export default AfiliacionService
