import { col } from 'sequelize'
import { models } from '../lib/sequelize'
import Doctor from '../utils/models/Doctor'
import DoctoresEspecialidades from '../utils/models/DoctoresEspecialidades'
import DoctoresAfiliaciones from '../utils/models/DoctoresAfiliaciones'
import { calculateAge } from '../utils/plus'

class DoctorService {
  async createDoctorAddEspecialidades(data) {
    // Return Doctor
    if(data['usuarioId']) {
      let doctor = await Doctor.findOne({
        where: { usuario_id: data['usuarioId'] }
      })
      if( !doctor ) {
        doctor = await Doctor.create(
          {
            usuario_id: data['usuarioId']
        }, {
          fields: ['usuario_id']
        })
      }
      if (doctor) {
        if ( data['especialidades'].length > 0 ) {
          data['especialidades'].forEach(async especialidad => {
            await DoctoresEspecialidades.create({
              id_doctor: doctor['id'],
              id_especialidad: especialidad
            }, {
              fields: ['id_doctor', 'id_especialidad']
            })
          })
        }
        if ( data['afiliaciones'].length > 0 ) {
          data['afiliaciones'].forEach(async afiliacion => {
            await DoctoresAfiliaciones.create({
              id_doctor: doctor['id'],
              id_afiliaciones: afiliacion
            }, {
              fields: ['id_doctor', 'id_afiliaciones']
            })
          })
        }
      }
    }

    return true
  }

  async getDoctorByUsuarioId(usuario_id) {
    const options = {
      where: { usuario_id }
    }
    return await models.Doctor.findOne(options)
  }

  async findAllRevision() {
    const options = {
      attributes: ['id', 'usuario_id', [col('descripcion'), 'licencia']],
      include: [{
        model: models.Usuario,
        as: 'usuario',
        attributes: ['email', 'nombre', 'apellido', 'carnet', [col('fecha_nacimiento'), 'edad'], 'genero', 'direccion', 'telefono', 'revision'],
        required: true,
        where: { revision: true }
      }]
    }
    const data = await models.Doctor.findAll(options)

    const response = data.map(item => {
      let doctor = item.dataValues
      let idoc = Object.values(doctor)
      idoc = idoc.filter(el => {
        if (el)
          if (typeof(el) === 'object')
            return el
      })
      delete doctor['usuario']
      doctor = Object.assign(doctor, idoc[0].dataValues)

      return doctor
    })

    if ( response.length > 0 )
      response.forEach(async row => {
        row['edad'] = calculateAge(row['edad'], new Date())
      })

    return response
  }
}

export default DoctorService
