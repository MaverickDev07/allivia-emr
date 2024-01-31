import { Router } from 'express'
import { FichaMedicamentosService } from '../services'

function fichaMedicamentosApi(app) {
  const router = Router()
  app.use( '/api/fichamedicamentos', router )
  const service = new FichaMedicamentosService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.find(req.query)

      res.status(200).json({
        message: 'Listar medicamentos de ficha médica',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.post('/add', async (req, res, next) => {
    const { body: _data } = req

    try {
      const data = await service.create(_data)

      res.status(200).json(data)
    } catch(err) {
      next(err)
    }
  })
}

export default fichaMedicamentosApi
