import Titulo from '../utils/models/Titulo'

class TituloService {
  async getTitulos() {
    // Return array
    return await Titulo.findAll({
      where: { eliminado: false }
    })
  }
}

export default TituloService
