import passport from 'passport'
import { Router } from 'express'
import { config } from '../config'
import {
  FarmaciasPacienteService
} from '../services'

// JWT strategy
// require('../utils/auth/strategies/jwt')

function webFarmaciasPacienteApi(app) {
  const router = Router()
  app.use( '/api/web/farmacias/pacientes', router )
  const service = new FarmaciasPacienteService()

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const data = await service.find(req.query)

        res.status(200).json({
          ok: true,
          message: 'Listado de pacientes con pedidos a farmacias',
          data
        })
      } catch(err) {
        next(err)
      }
    }
  )
}

export default webFarmaciasPacienteApi
