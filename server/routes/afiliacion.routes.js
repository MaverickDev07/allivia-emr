import { Router } from 'express'
import { AfiliacionService } from '../services'

function afiliacionApi(app) {
  const router = Router()
  app.use( '/api/afiliaciones', router )
  const service = new AfiliacionService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.getAfiliaciones()

      res.status(200).json({
        message: 'Find All Afiliaciones',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default afiliacionApi
