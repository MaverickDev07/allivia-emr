import { Router } from 'express'
import AgendaCitaService from '../services/agendacita.service'

function agendacitaApi(app) {
  const router = Router()
  app.use( '/api/agendacita', router )
  const service = new AgendaCitaService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.find()

      res.status(200).json({
        message: 'listado agendacita',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default agendacitaApi
