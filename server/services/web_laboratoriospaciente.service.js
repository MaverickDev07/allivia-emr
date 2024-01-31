import { Op } from 'sequelize'
import WebLaboratoriosPaciente from '../utils/models/WebLaboratoriosPaciente'
import { calculateAge } from '../utils/plus'
import FichaLaboratoriosService from './fichalaboratorios.service'
import ArchivoLaboratoriosService from './archivolaboratorios.service'

class WebLaboratoriosPacienteService {
  constructor() {
    this.fichaLaboratoriosService = new FichaLaboratoriosService()
    this.archivoLaboratoriosService = new ArchivoLaboratoriosService()
  }

  async getLaboratoriosPaciente(query = {}, rol) {
    // Return array
    /*const query = 'SELECT * FROM web_laboratoriospaciente'
    const [data] = await sequelize.query(query)
    return data

    return await WebLaboratoriosPaciente.findAll()*/

    const options = {
      where: {}
    }
    const { limit, offset, id_wusuario } = query
    let { estado } = query
    if (estado)
      if ( !Array.isArray(estado) )
        estado = [estado]
      else
        estado.push(null)

    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }
    if (estado)
      options.where.estado = { [Op.or]: estado }
    if (id_wusuario && rol != 'admin')
      options.where['id_wusuario'] = id_wusuario

    const lab_pacientes = await WebLaboratoriosPaciente.findAll(options)

    if ( lab_pacientes.length > 0 )
      lab_pacientes.forEach(async lpaciente => {
        if (lpaciente.dataValues['foto'])
          lpaciente.dataValues['foto'] = `http://104.154.164.119:8080/api/downloadFile/PACIENTE/${lpaciente.dataValues['foto']}`
        lpaciente.dataValues['edad'] = calculateAge(lpaciente.dataValues['edad'], new Date())
        if ( lpaciente.dataValues['suscripcion'] == 'Alíviate Silver' && lpaciente.dataValues['solicitud'] == 'Hemograma completo' )
          lpaciente.dataValues['solicitud'] = 'Laboratorio Silver'
        if ( lpaciente.dataValues['suscripcion'] == 'Alíviate Gold' && lpaciente.dataValues['solicitud'] == 'Hemograma completo' )
          lpaciente.dataValues['solicitud'] = 'Laboratorio Gold'
      })

    return lab_pacientes
  }

  async getLaboratoriosPacienteByAgendaCita(id) {
    const options = {
      where: {},
      attributes: ['fecha', 'solicitud', 'estado', 'id_agendacita', 'id_paciente', 'id_fichalaboratorios']
    }
    options.where.id_agendacita = id

    const laboratorios_paciente = await WebLaboratoriosPaciente.findAll(options)
    let fichaLab = {}

    if ( laboratorios_paciente.length > 0 )
      for (const row of laboratorios_paciente) {
        fichaLab = await this.fichaLaboratoriosService.findOne( row.dataValues['id_fichalaboratorios'] )
        row.dataValues['archivo'] = await this.archivoLaboratoriosService.findOne(fichaLab['id_archivolaboratorios'])
        // row.dataValues['laboratorioEmpresa'] = {}
      }

    return laboratorios_paciente
  }
}

export default WebLaboratoriosPacienteService
