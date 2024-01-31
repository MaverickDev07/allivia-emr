import passport from 'passport'
import { Router } from 'express'
import { WebPermisosService } from '../services'
import validation from '../utils/middlewares/validationHandler'
import {
  PermisoSchema
} from '../utils/schemas/webPermisos'

// JWT strategy
// require('../utils/auth/strategies/jwt')

function webPermisosApi(app) {

  const router = Router()
  app.use( '/api/web/permisos', router )
  const service = new WebPermisosService()

  router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try {
      const data = await service.getPermisos()

      res.status(200).json({
        message: 'Listar Permisos',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.post(
    '/',
    validation(PermisoSchema),
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const { body: _data } = req

      try {
        const data = await service.createPermiso( _data )

        res.status(201).json(data)
      } catch(err) {
        next(err)
      }
    }
  )

  router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await service.getOnePermiso( id )

      res.status(200).json({
        message: 'Obtener un permiso',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.put(
    '/:id',
    validation(PermisoSchema),
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const { id } = req.params
      const { body: _data } = req

      try {
        const data = await service.updatePermiso( id, _data )

        res.status(200).json(data)
      } catch(err) {
        next(err)
      }
    }
  )

  router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await service.deletePermiso( id )

      res.status(200).json({
        message: 'Permiso eliminado',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default webPermisosApi
