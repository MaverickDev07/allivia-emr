import { models } from '../lib/sequelize'

class SuscripcionPacienteService {
  async getSuscripcionPacienteById(id) {
    return await models.SuscripcionPaciente.findByPk(id)
  }

  async getSuscripcionPacienteByPacienteId(pacienteId) {
    // estado = 'VIGENTE' AND id_paciente = :idPaciente
    const options = {
      where: {
        estado: 'VIGENTE',
        pacienteId
      }
    }
    return await models.SuscripcionPaciente.findOne(options)
  }
}

export default SuscripcionPacienteService
