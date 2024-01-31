import { models } from '../lib/sequelize'
import boom from 'boom'

class FarmaciaRecetas {
  ordenCompra( { id = 0, grupo = '', medicamento = '', dosis = '', cantidad = 0, precio = 0.0 } = {} ) {
    return {
      id,
      grupo,
      medicamento,
      dosis,
      cantidad,
      precio
    }
  }

  async detalleRecetas(detalleEnvioId) {
    const detalleEnvio = await models.DetalleEnvio.findByPk(detalleEnvioId)
    if(!detalleEnvio)
      throw 'Detalle Envio no encontrado'
    const agendacitaId = detalleEnvio['agendacitaId']

    const options = {
      include: [
        {
          model: models.Paciente,
          as: 'paciente',
          include: [{
            model: models.Usuario,
            as: 'usuario'
          }]
        }, {
          model: models.Doctor,
          as: 'doctor',
          include: [
            {
              model: models.Usuario,
              as: 'usuario'
            },
            {
              model: models.DoctoresEspecialidades,
              as: 'doctoresespecialidades',
              include: [
                {
                  model: models.Especialidad,
                  as: 'especialidad'
                }
              ]
            }
          ]
        },
        {
          model: models.FichaMedica,
          as: 'fichamedica',
          include: [
            {
              model: models.FichaMedicamentos,
              as: 'fichamedicamentos',
              include: [
                {
                  model: models.Medicamento,
                  as: 'medicamento'
                }
              ]
            }, {
              model: models.FichaDiagnostico,
              as: 'fichadiagnostico'
            }
          ]
        },
        {
          model: models.DetalleEnvio,
          as: 'detalleenvio'
        }
      ],
      where: {}
    }
    const compra = { descuento: 0, total: 0.0, medicamentos: [] }
    const response = await models.AgendaCita.findByPk(agendacitaId, options)
    if ( response.dataValues['fichamedica'] )
      response.dataValues['fichamedica'][response.dataValues.fichamedica.length-1].fichamedicamentos.forEach(row => {
        if ( row['medicamentoId'] ) {
          compra.medicamentos.push( this.ordenCompra({
            id: row['id'],
            grupo: row['medicamento']['grupo'],
            medicamento: row['medicamento']['producto'],
            dosis: row['dosis'],
            cantidad: row['cantidad'],
            precio: row['medicamento']['precio']
          }) )
        } else {
          compra.medicamentos.push( this.ordenCompra({
            id: row['id'],
            medicamento: row['nombre_medicamento'],
            dosis: row['dosis'],
            cantidad: row['cantidad']
          }) )
        }
      })
    if ( response.dataValues['detalleenvio'] )
      response.dataValues['detalleenvio'] = detalleEnvio.dataValues
    // response.dataValues['detalleenvio'] = response.dataValues['detalleenvio'][response.dataValues.detalleenvio.length-1]

    response.dataValues['ordenCompra'] = compra

    return response
  }
}

export default FarmaciaRecetas
