import { Router } from 'express'
import { EspecialidadService } from '../services'

function especialidadApi(app) {

  const router = Router()
  app.use( '/api/especialidades', router )
  const service = new EspecialidadService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.getEspecialidades()

      res.status(200).json({
        message: 'Find All Especialidades',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default especialidadApi
