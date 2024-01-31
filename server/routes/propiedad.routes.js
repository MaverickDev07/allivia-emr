import { Router } from 'express'
import { PropiedadService } from '../services'
import validation from '../utils/middlewares/validationHandler'
import { 
  createPropiedadSchema
} from '../utils/schemas/propiedad'


function propiedadApi(app) {
  const router = Router()
  app.use( '/api/propiedad/paciente', router )
  const service = new PropiedadService()

  router.get('/:pacienteId', async (req, res, next) => {
    const { pacienteId } = req.params

    try {
      const data = await service.findByPacienteId(pacienteId, req.query)

      res.status(200).json({
        message: 'Listar propiedades del paciente',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.post(
    '/',
    validation(createPropiedadSchema),
    async (req, res, next) => {
      const { body: _data } = req
  
      try {
        const data = await service.create( _data )
  
        res.status(200).json(data)
      } catch(err) {
        next(err)
      }
    }
  )
}

export default propiedadApi
