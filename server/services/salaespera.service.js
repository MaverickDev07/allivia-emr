import SalaEspera from '../utils/models/SalaEspera'
import { calculateAge } from '../utils/plus'

class SalaEsperaService {
  async getSalaEspera(query = {}) {
    const options = {
      where: {}
    }
    const { limit, offset } = query
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }

    const sespera = await SalaEspera.findAll(options)

    if ( sespera.length > 0 )
      sespera.forEach(async file => {
        file.dataValues['foto'] = `http://104.154.164.119:8080/api/downloadFile/PACIENTE/${file.dataValues['foto']}`
        file.dataValues['edad'] = calculateAge(file.dataValues['edad'], new Date())
      })

    return sespera
  }
}

export default SalaEsperaService
