import { Router } from 'express'
import { PacienteService } from '../services'

function pacienteApi(app) {
  const router = Router()
  app.use( '/api/pacientes', router )
  const service = new PacienteService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.getPacientes()

      res.status(200).json({
        message: 'Listar Pacientes',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default pacienteApi
