import Especialidad from '../utils/models/Especialidad'

class EspecialidadService {
  async getEspecialidades() {
    // Return array
    return await Especialidad.findAll()
  }
}

export default EspecialidadService
