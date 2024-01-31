import { Router } from 'express'
import { UsuarioService } from '../services'

function usuariosApi(app) {

  const router = Router()
  app.use( '/api/usuarios', router )
  const service = new UsuarioService()

  router.get('/', async (req, res, next) => {
    //const { id, skip, limit, field } = req.query
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

  router.get('/lastIdDevice/:id', async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await service.getOneUsuarioIdDevice(id)

      res.status(200).json({
        message: 'Obtener el último id del dispositivo',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.post('/', async (req, res, next) => {
    const { body: _data } = req

    try {
      const data = await service.createUsuario( _data )

      res.status(200).json({
        message: 'Usuario created successfully',
        data
      })
    } catch(err) {
      next(err)
    }
  })

  router.post('/perfil', async (req, res, next) => {
    const { body: _data } = req

    try {
      const data = await service.updateUsuarioProfile( _data )

      res.status(200).json({
        message: 'Usuario add profile successfully',
        data: _data
      })
    } catch(err) {
      next(err)
    }
  })
/*
  router.put(
    '/:id',
    validation({id: idSchema}, 'params'),
    validation(updateUserSchema),
    async (req, res, next) => {
      const { id } = req.params
      const { body: _data } = req

      try {
        const data = await service.updateUserss({ id, data: _data })
      
        res.status(200).json({
          message: 'User updated',
          data
        })
      } catch(err) {
        next(err)
      }
    }
  )

  router.delete(
    '/:id',
    validation({id: idSchema}, 'params'),
    async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await service.deleteUser(id)

      res.status(200).json({
        message: 'User deleted',
        data
      })
    } catch(err) {
      next(err)
    }
  })
*/
}

export default usuariosApi
