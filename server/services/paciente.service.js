import { models } from '../lib/sequelize'

class PacienteService {
  async getPacientes() {
    // Return array
    const options = {
      include: [{
        model: models.Usuario,
        as: 'usuario'
      }]
    }
    const pacientes = await models.Paciente.findAll(options)

    return pacientes
  }

  async getPacienteByUsuarioId(usuario_id) {
    const options = {
      where: { usuario_id }
    }
    return await models.Paciente.findOne(options)
  }
}

export default PacienteService
