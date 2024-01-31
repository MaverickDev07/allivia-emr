import { Router } from 'express'
import { TituloService } from '../services'

function tituloApi(app) {
  const router = Router()
  app.use( '/api/titulos', router )
  const service = new TituloService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.getTitulos()

      res.status(200).json({
        message: 'Find All Titulos',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default tituloApi
