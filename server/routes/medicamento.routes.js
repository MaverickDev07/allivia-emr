import { Router } from 'express'
import { MedicamentoService } from '../services'

function medicamentoApi(app) {
  const router = Router()
  app.use( '/api/medicamentos', router )
  const service = new MedicamentoService()

  router.get('/llenarMedicamentos', async (req, res, next) => {
    try {
      const data = await service.llenarDatosMedicamentos()

      res.status(200).json({
        message: 'Llenar medicamentos desde un archivo excel',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.find(req.query)

      res.status(200).json({
        message: 'Listar Medicamentos',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default medicamentoApi
