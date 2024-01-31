import { Router } from 'express'
import passport from 'passport'
import pass from '../utils/middlewares/pass'
import { OrdenCompraMedicamentosService } from '../services'

function OrdenCompraMedicamentosApi(app) {
  const router = Router()
  app.use( '/api/ordenCompraMedicamentos', router )
  const service = new OrdenCompraMedicamentosService()

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    pass('farmacia'),
    async (req, res, next) => {
      try {
        const data = await service.find(req.query)

        res.status(200).json({
          ok: true,
          message: 'Listar orden de compra',
          data
        })
      } catch(err) {
        next(err)
      }
    }
  )

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    pass('farmacia'),
    async (req, res, next) => {
      const { body: _data } = req

      try {
        const data = await service.create(_data)

        res.status(200).json({
          ok: true,
          message: 'Orden de compra agregado satisfactoriamente',
          data
        })
      } catch(err) {
        next(err)
      }
    }
  )
}

export default OrdenCompraMedicamentosApi
