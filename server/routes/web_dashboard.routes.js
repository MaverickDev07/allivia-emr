import passport from 'passport'
import { Router } from 'express'
import { config } from '../config'
import {
  WebDashboardService
} from '../services'

function webDashboardApi(app) {
  const router = Router()
  app.use( '/api/web/dashboard', router )
  const service = new WebDashboardService()

  router.get(
    '/usuarios',
    // passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const data = await service.dashboardUsuarios(req.query)

        res.status(200).json({
          ok: true,
          ...data
        })
      } catch(err) {
        next(err)
      }
    }
  )
  router.get(
    '/antecedenteMedico/:pacienteId',
    // passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const { pacienteId } = req.params
        const data = await service.dashboardAntecedenteMedicoByPacienteId(pacienteId)

        res.status(200).json(data)
      } catch(err) {
        next(err)
      }
    }
  )

  router.get(
    '/consultas',
    // passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const data = await service.dashboardConsultas(req.query)

        res.status(200).json({
          ok: true,
          ...data
        })
      } catch(err) {
        next(err)
      }
    }
  )
}

export default webDashboardApi
