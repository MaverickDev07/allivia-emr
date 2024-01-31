import passport from 'passport'
import { Router } from 'express'
import { WebUsuarioService } from '../services'
import validation from '../utils/middlewares/validationHandler'
import {
  createUsuarioSchema,
  updateUsuarioSchema
} from '../utils/schemas/webUsuarios'

// JWT strategy
// require('../utils/auth/strategies/jwt')

function webUsuariosApi(app) {

  const router = Router()
  app.use( '/api/web/usuarios', router )
  const service = new WebUsuarioService()

  router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try {
      const data = await service.getUsuarios()

      res.status(200).json({
        message: 'Find All Usuarios',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.post(
    '/',
    validation(createUsuarioSchema),
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const { body: _data } = req

      try {
        const data = await service.createUsuario( _data )

        res.status(201).json(data)
      } catch(err) {
        next(err)
      }
    }
  )

  router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await service.getOneUsuario( id )

      res.status(200).json({
        message: 'Obtener un usuario',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.put(
    '/:id',
    validation(updateUsuarioSchema),
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const { id } = req.params
      const { body: _data } = req

      try {
        const data = await service.updateUsuario( id, _data )

        res.status(200).json(data)
      } catch(err) {
        next(err)
      }
    }
  )

  router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await service.deleteUsuario( id )

      res.status(200).json(data)
    } catch(err) {
      next(err)
    }
  })
}

export default webUsuariosApi
