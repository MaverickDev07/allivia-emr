import passport from 'passport'
import { Router } from 'express'
import fileUpload from 'express-fileupload'
import ip from 'ip'
import { config } from '../config'
import uploadFileMiddleware from '../utils/middlewares/uploadFile'
import {
  ArchivoLaboratoriosService,
  LaboratoriosPacienteService
} from '../services'

// JWT strategy
// require('../utils/auth/strategies/jwt')

function archivoLaboratoriosApi(app) {
  const router = Router()
  router.use(fileUpload())
  app.use( '/api/archivolaboratorios', router )
  const service = new ArchivoLaboratoriosService()
  const service2 = new LaboratoriosPacienteService()

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      try {
        const data = await service.find()

        res.status(200).json({
          message: 'listado archivo laboratorios',
          data
        })
      } catch(err) {
        next(err)
      }
    }
  )

  /*router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    uploadFileMiddleware('archivo', 'archivolab'),
    async (req, res, next) => {
      const { body: _data, fileName } = req
      let updateFichaLab = {}, data = {}

      try {
        const fichaLab = await service2.findOne(_data['id_fichalaboratorios'])
        // _data['archivo'] = `http://${ip.address()}:${config.port}/files/archivolab/${fileName}`
        _data['archivo'] = `http://104.154.164.119:${config.port}/files/archivolab/${fileName}`

        if ( !fichaLab['id_archivolaboratorios'] ) {
          data = await service.create( _data )
          fichaLab['id_archivolaboratorios'] = data['id']
        } else {
          data = await service.update( fichaLab['id_archivolaboratorios'], _data )
        }

        fichaLab['estado'] = _data['estado']
        updateFichaLab = await service2.update(fichaLab['id'], fichaLab['dataValues'])
        updateFichaLab['dataValues']['archivo'] = data['dataValues']

        res.status(201).json({
          'ok': true,
          message: 'Archivo Laboratorio creado correctamente.',
          data: updateFichaLab
        })
      } catch(err) {
        next(err)
      }
    }
  )*/

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    uploadFileMiddleware('archivo', 'archivolab'),
    async (req, res, next) => {
      const { body: _data, fileName } = req
      let updateLabPaciente = {}, data = {}

      try {
        const labPaciente = await service2.findOne(_data['id_laboratorios_paciente'])
        // _data['archivo'] = `http://${ip.address()}:${config.port}/files/archivolab/${fileName}`
        _data['archivo'] = `http://104.154.164.119:${config.port}/files/archivolab/${fileName}`

        if ( !labPaciente['id_archivolaboratorios'] ) {
          data = await service.create( _data )
          labPaciente['id_archivolaboratorios'] = data['id']
        } else {
          data = await service.update( labPaciente['id_archivolaboratorios'], _data )
        }

        labPaciente['estado'] = _data['estado']
        labPaciente['id_wusuario'] = Number(_data['id_wusuario'])
        updateLabPaciente = await service2.update(labPaciente['id'], labPaciente['dataValues'])
        updateLabPaciente['dataValues']['archivo'] = data['dataValues']

        res.status(201).json({
          'ok': true,
          message: 'Archivo Laboratorio creado correctamente.',
          data: updateLabPaciente
        })
      } catch(err) {
        next(err)
      }
    }
  )
}

export default archivoLaboratoriosApi
