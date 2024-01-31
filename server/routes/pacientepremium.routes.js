import { Router } from 'express'
import fileSystem from 'fs'
import { PacientePremiumService } from '../services'

function pacientePremiumApi(app) {
  const router = Router()
  app.use( '/api/pacientesPremium', router )
  const service = new PacientePremiumService()

  router.get('/', async (req, res, next) => {
    try {
      const data = await service.getPacientesPremium()

      res.status(200).json({
        message: 'Pacientes Premium: Abre link en el navegador',
        descarga: `http://104.154.164.119:3000/static/${data}`
      })
    } catch(err) {
      next(err)
    }
  })
}

export default pacientePremiumApi
