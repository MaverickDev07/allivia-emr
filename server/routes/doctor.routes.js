import { Router } from 'express'
import { DoctorService } from '../services'

function doctoresApi(app) {
  const router = Router()
  app.use( '/api/doctores', router )
  const service = new DoctorService()

  router.post('/informacionLaboral', async (req, res, next) => {
    const { body: _data } = req

    try {
      const data = await service.createDoctorAddEspecialidades( _data )

      res.status(200).json({
        message: 'created successfully',
        data
      })
    } catch(err) {
      next(err)
    }
  })
}

export default doctoresApi
