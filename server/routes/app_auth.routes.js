import { Router } from 'express'
import passport from 'passport'
import boom from 'boom'
import jwt from 'jsonwebtoken'
import { config } from '../config'
import validation from '../utils/middlewares/validationHandler'
import { authUserSchema } from '../utils/schemas/appAuth'
import {
  PacienteService,
  DoctorService,
  SuscripcionService,
  SuscripcionPacienteService,
  UsuarioService
} from '../services'

async function buildAppUser(user) {
  const s_paciente = new PacienteService()
  const s_doctor = new DoctorService()
  const s_suscripcion = new SuscripcionService()
  const s_suscripcion_paciente = new SuscripcionPacienteService()
  const { descricpion: tipoUsuario } = user
  let response = {}

  if (tipoUsuario == 'PACIENTE') {
    const paciente = await s_paciente.getPacienteByUsuarioId(user['usuario_id'])
    if(!paciente)
      throw `No se encontró paciente con el usuario_id: ${user['usuario_id']}`
    const suscripcionPaciente = await s_suscripcion_paciente.getSuscripcionPacienteByPacienteId(paciente['id'])
    if(!suscripcionPaciente)
      throw `No se encontró suscripcionPaciente con el pacienteId: ${paciente['id']}`
    const suscripcion = await s_suscripcion.getSuscripcionById(suscripcionPaciente['suscripcionId'])
    if(!suscripcion)
      throw `No se encontró la suscripcion con la suscripcionPacienteId: ${suscripcionPaciente['suscripcionId']}`

    paciente.dataValues['perfilPaciente'] = user
    paciente.dataValues['suscripcion'] = suscripcion
    response = paciente
  }

  if (tipoUsuario == 'DOCTOR') {
    const doctor = await s_doctor.getDoctorByUsuarioId(user['usuario_id'])
    doctor.dataValues['perfilDoctor'] = user
    response = doctor
  }

  return response
}

function buildWebUser({ id, nombre, email }, rol) {
  return { id, nombre, email, rol }
}

function appAuthApi(app) {
  const router = Router()
  app.use( '/api', router )

  router.post('/login', validation(authUserSchema), async (req, res, next) => {
    const { usuario, token: token_auth } = req.body
    if (token_auth) {
      const s_usuario = new UsuarioService()
      let payload = {}, token = null, user = await s_usuario.getOneUsuarioByUsuario(usuario)
      if (!user)
        next(boom.unauthorized())
      if (user['token'] != token_auth) {
        user['token'] = token_auth
        await user.save()
      }
      payload = { usuario_id: user.usuario_id, descripcion: user.descricpion, nombre: user.nombre, email: user.email }
      token = jwt.sign(payload, config.authJwtSecret, { expiresIn: "30m" })
      user = await buildAppUser(user)

      res.setHeader('Authorization', `Bearer ${token}`)
      return res.status(200).json(user)
    } else {
      passport.authenticate('local', (error, user) => {
        try {
          if (error || !user) {
            next(boom.unauthorized())
          }

          req.login(user, { session: false }, async function(error) {
            try {
              if (error) {
                next(error)
              }

              let payload = {}, rol = null, token = null
              user.nombre = user.apellido ? `${user.nombre} ${user.apellido}` : user.nombre

              if (user.auth == 'web') {
                payload = { id: user.id, nombre: user.nombre, email: user.email }
                token = jwt.sign(payload, config.authJwtSecret, { expiresIn: '30m' })
                if ( user['wrol'] )
                  rol = user.wrol.dataValues.nombre
                user = {
                  ok: true,
                  user: buildWebUser(user, rol),
                  access_token: token
                }
              }

              if (user.auth == 'app') {
                payload = { usuario_id: user.usuario_id, descripcion: user.descricpion, nombre: user.nombre, email: user.email }
                token = jwt.sign(payload, config.authJwtSecret, { expiresIn: "30m" })
                user = await buildAppUser(user)
              }

              res.setHeader('Authorization', `Bearer ${token}`)
              return res.status(200).json(user)
            } catch(err) {
              next(err)
            }
          })
        } catch (error) {
          next(error)
        }
      })(req, res, next)
    }
  })

  /*router.get(
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
  )*/
}

export default appAuthApi
