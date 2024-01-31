import passport from 'passport'
import { Router } from 'express'
import { SalaEsperaService } from '../services'
import validation from '../utils/middlewares/validationHandler'

// JWT strategy
// require('../utils/auth/strategies/jwt')

function salaEsperaApi(app) {
  const router = Router()
  app.use( '/api/web/salaespera', router )
  const service = new SalaEsperaService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.getSalaEspera(req.query)

      res.status(200).json(data)
    } catch(err) {
      next(err)
    }
  })
}

export default salaEsperaApi
