import { models } from '../lib/sequelize'
import { Op, fn, col, where } from 'sequelize'
import boom from 'boom'
import { calculateAge } from '../utils/plus'
import { getPagination, getPagingFormat, getCountFormat } from '../utils/global'

class WebDashboard {
  existTipoCita(value) {
    return value ? { descripcion: value } : {}
  }
  existTipoConsulta(value) {
    return value ? { codigo: value } : {}
  }
  consultasFreePagadas(value) {
    if(!value) return {}
    if (value === 'pagada')
      return { monto: { [Op.notLike]: '0' } }
    if (value === 'free')
      return { monto: { [Op.like]: '0' } }

    return {}
  }

  async dashboardUsuarios(query = {}) {
    // Listar por Paginación
    const { page, size, sort } = query
    const { limit, offset } = getPagination(page, size)

    const options = {
      include: [
        {
          model: models.Usuario,
          as: 'usuario',
          attributes: ['email', 'nombre', 'apellido', 'creado', 'genero', 'telefono', [col('fecha_nacimiento'), 'edad']],
          required: true
        },
        {
          model: models.SuscripcionPaciente,
          as: 'suscripcionpaciente',
          attributes: ['vigencia'],
          required: true,
          where: { estado: 'VIGENTE' },
          include: [{
            model: models.Suscripcion,
            as: 'suscripcion',
            attributes: ['descripcion', 'precio']
          }]
        }
      ],
      where: { prueba: false },
      order: []
    }

    if (page != null) {
      options.limit = limit
      options.offset = offset
    }

    if (sort) {
      options.order.push(sort.split(','))
    }

    // Aplicamos filtros
    const pacientes = await models.Paciente.findAndCountAll(options)

    if ( pacientes.rows.length > 0 )
      pacientes.rows.forEach(async row => {
        row['usuario'].dataValues['edad'] = calculateAge(row['usuario'].dataValues['edad'], new Date())
      })

    return getPagingFormat(pacientes, page, limit)
  }

  async dashboardAntecedenteMedicoByPacienteId(pacienteId) {
    const options = {
      include: [
        {
          model: models.AntecedenteAlergia,
          as: 'antecedenteAlergia'
        },
        {
          model: models.AntecedenteCirugia,
          as: 'antecedenteCirugia'
        },
        {
          model: models.AntecedenteEnfermedadBase,
          as: 'antecedenteEnfermedadBase'
        },
        {
          model: models.AntecedenteFamilia,
          as: 'antecedenteFamilia'
        },
        {
          model: models.AntecedenteVacuna,
          as: 'antecedenteVacuna'
        }
      ],
      where: { pacienteId }
    }
    // Aplicamos filtros
    return await models.AntecedenteMedico.findAll(options)
  }

  async dashboardConsultas(query = {}) {
    const { tipocita, tipoconsulta, consulta } = query

    const options = {
      attributes: ['id', 'fecharegistro','fecha', 'inicioconsulta', 'finconsulta', 'estadoconsulta', 'motivoconsulta', 'precio', 'reconsulta'],
      include: [
        {
          model: models.Paciente,
          as: 'paciente',
          required: true,
          where: { prueba: false },
          attributes: ['descripcion'],
          include: [{
              model: models.Usuario,
              as: 'usuario',
              attributes: ['nombre', 'apellido', 'genero', 'telefono'],
              required: true
          }]
        },
        {
          model: models.TipoCita,
          as: 'tipocita',
          required: true,
          where: this.existTipoCita(tipocita),
          attributes: ['descripcion']
        },
        {
          model: models.TipoConsulta,
          as: 'tipoconsulta',
          required: true,
          where: this.existTipoConsulta(tipoconsulta),
          attributes: ['tipo']
        },
        {
          model: models.Pago,
          as: 'pago',
          required: true,
          where: this.consultasFreePagadas(consulta),
          attributes: ['detalle', 'monto']
        },
      ]
    }

    // Aplicamos filtros
    const agendaCita = await models.AgendaCita.findAndCountAll(options)

    return getCountFormat(agendaCita)
  }
}

export default WebDashboard
