import { Router } from 'express'
import { writeBinary, asignBorder, border, alignment } from '../lib/xls'
import { DoctorService } from '../services'

const HEADER_REVISION = ['id', 'usuario_id', 'licencia', 'email', 'nombre', 'apellido', 'carnet', 'edad', 'genero', 'direccion', 'telefono', 'revision']

function reportsExcelApi(app) {
  const router = Router()
  app.use( '/api/reports', router )
  const s_doctor = new DoctorService()

  router.get('/doctores/revision', async (req, res, next) => {
    try {
      const data = await s_doctor.findAllRevision()
      const ws = {}
      const rangeTitulo = { s: 'A1', e: 'L1' }
      //const rangeTitulo = 'A1:L1'

      ws['!merges'] = [ rangeTitulo ]
      ws['A1'] = { v: 'DOCTORES REGISTRADOS EN REVISIÓN', t: 's', s: { border, alignment, font: { bold: true } } }
      asignBorder(rangeTitulo, ws)
      // console.log(ws)
      const wbout = writeBinary(data, HEADER_REVISION, ws, 1, 0, 2, 0)

      res.setHeader('Content-Type', 'application/vnd.openxmlformats')
      res.setHeader("Content-Disposition", "attachment; filename=" + `doctoresRevision.xlsx`)
      res.end(wbout, 'binary')
    } catch(err) {
      next(err)
    }
  })
}

export default reportsExcelApi
