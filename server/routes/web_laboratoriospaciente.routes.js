import passport from 'passport'
import { Router } from 'express'
import {
  WebLaboratoriosPacienteService,
  LaboratoriosPacienteService
} from '../services'
import validation from '../utils/middlewares/validationHandler'
import pass from '../utils/middlewares/pass'
import {
  UpdateLaboratoriosPacienteSchema
} from '../utils/schemas/laboratoriosPaciente'

// JWT strategy
// require('../utils/auth/strategies/jwt')

function webLaboratoriosPacienteApi(app) {
  const router = Router()
  app.use( '/api', router )
  const service = new WebLaboratoriosPacienteService()
  const service2 = new LaboratoriosPacienteService()

  router.get(
    '/web/laboratorios/pacientes',
    passport.authenticate('jwt', { session: false }),
    pass('laboratorio'),
    async (req, res, next) => {
      try {
        let rol = null
        if (req['user']['wrol'])
          rol = req['user']['wrol']['dataValues']['nombre']
        const data = await service.getLaboratoriosPaciente(req.query, rol)

        res.status(200).json(data)
      } catch(err) {
        next(err)
      }
    }
  )

  router.put(
    '/web/laboratorios/pacientes/:id',
    validation(UpdateLaboratoriosPacienteSchema),
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const { id } = req.params
      const { body: _data } = req

      try {
        const data = await service2.update(id, _data)

        res.status(200).json({
          ok: true,
          message: 'Laboratorio Empresa actualizado correctamente',
          data
        })
      } catch(err) {
        next(err)
      }
    }
  )

  router.get('/laboratoriosPaciente/agendacita/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      const data = await service.getLaboratoriosPacienteByAgendaCita(id)

      res.status(200).json(data)
    } catch(err) {
      next(err)
    }
  })
}

export default webLaboratoriosPacienteApi
