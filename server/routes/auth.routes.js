import { Router } from 'express'
import passport from 'passport'
import boom from 'boom'
import jwt from 'jsonwebtoken'
import { config } from '../config'
import validation from '../utils/middlewares/validationHandler'
import { authUserSchema } from '../utils/schemas/auth'

function buildUser(user, rol) {
  return {
    id: user['id'],
    nombre: user['nombre'],
    email: user['email'],
    rol
  }
}

function authApi(app) {

  const router = Router()
  app.use( '/api/web/auth', router )

  router.post('/login', validation(authUserSchema), async (req, res, next) => {
    passport.authenticate('local', (error, user) => {
      try {
        if (error || !user) {
          next(boom.unauthorized())
        }

        req.login(user, { session: false }, function(error) {
          if (error) {
            next(error)
          }

          const payload = { id: user.id, nombre: user.nombre, email: user.email }
          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: "30m"
          })
          let rol = null

          if ( user['wrol'] )
            rol = user.wrol.dataValues.nombre
          user = buildUser(user, rol)

          return res.status(200).json(
            {
              ok: true,
              user,
              access_token: token
            }
          )
        })
      } catch (error) {
        next(error)
      }
    })(req, res, next)
  })

  router.get(
    '/token',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const payload = { id: req.user.id, nombre: req.user.nombre, email: req.user.email }
        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: "30m"
        })
        let rol = null

        if ( req.user['wrol'] )
          rol = req.user.wrol.dataValues.nombre
        req.user = buildUser(req.user, rol)

        res.status(200).json(
          {
            ok: true,
            user: req.user,
            access_token: token
          }
        )
      } catch (error) {
        next(error)
      }
    }
  )
}

export default authApi
