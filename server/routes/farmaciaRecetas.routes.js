import { Router } from 'express'
import passport from 'passport'
import pass from '../utils/middlewares/pass'
import { FarmaciaRecetasService } from '../services'

function farmaciaRecetasApi(app) {
  const router = Router()
  app.use( '/api/farmaciaRecetas', router )
  const service = new FarmaciaRecetasService()

  router.get(
    '/:detalleEnvioId',
    passport.authenticate('jwt', { session: false }),
    pass('farmacia'),
    async (req, res, next) => {
      const { detalleEnvioId } = req.params

      try {
        const data = await service.detalleRecetas(detalleEnvioId)

        res.status(200).json({
          ok: true,
          message: 'Detalle de farmacias recetas',
          data
        })
      } catch(err) {
        next(err)
      }
    }
  )
}

export default farmaciaRecetasApi
