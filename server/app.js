import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import path from 'path'
import boom from 'boom'
import cors from 'cors'

/*import {
  projectRouter,
  taskRouter
} from './routes'*/
import {
  usuarioApiRouter,
  doctorApiRouter,
  pacienteApiRouter,
  especialidadApiRouter,
  afiliacionApiRouter,
  tituloApiRouter,

  agendacitaApiRouter,
  salaEsperaApiRouter,
  archivoLaboratoriosApiRouter,
  webFarmaciasPacienteApiRouter,
  fichaMedicamentosApiRouter,
  ordenCompraMedicamentosApiRouter,

  authApiRouter,
  webUsuariosApiRouter,
  webPermisosApi,
  webLaboratoriosPacienteApiRouter,
  webDashboardApiRouter,

  appAuthApiRouter,

  farmaciaRecetasApiRouter,
  uploadApiRouter,
  medicamentoApiRouter,
  propiedadApiRouter,
  pacientePremiumApiRouter,

  reportsExcelApiRouter
} from './routes'

import { config } from './config'
import processPath from './lib/path'
import {
  logErrors,
  wrapErrors,
  clientErrorHandler
} from './utils/middlewares/errorsHandlers'

// App
const app = express()

// Middlewares
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// Security
const whitelist = [
  'http://localhost:3000',
  'http://localhost:4200',
  'http://104.154.164.119:4200',
  'http://localhost:4100',
  'http://104.154.164.119:4100',
  'http://104.154.164.119:3000'
]
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options))
if (config.dev) {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

// Static files
app.use('/static', express.static(path.join(__dirname, 'utils/files/')))
app.use('/files', express.static(processPath().absolutePath))

// Middleware Authentication
// Basic strategy
require('./utils/auth/strategies/local')
// JWT strategy
require('./utils/auth/strategies/jwt')

// Routes
// app.use('/api/projects', projectRouter)
// app.use('/api/tasks', taskRouter)
usuarioApiRouter(app)
doctorApiRouter(app)
pacienteApiRouter(app)
especialidadApiRouter(app)
afiliacionApiRouter(app)
tituloApiRouter(app)

agendacitaApiRouter(app)
salaEsperaApiRouter(app)
archivoLaboratoriosApiRouter(app)
webFarmaciasPacienteApiRouter(app)
fichaMedicamentosApiRouter(app)
ordenCompraMedicamentosApiRouter(app)

authApiRouter(app)
webUsuariosApiRouter(app)
webPermisosApi(app)
webLaboratoriosPacienteApiRouter(app)
webDashboardApiRouter(app)

appAuthApiRouter(app)

farmaciaRecetasApiRouter(app)
uploadApiRouter(app)
medicamentoApiRouter(app)
propiedadApiRouter(app)
pacientePremiumApiRouter(app)

reportsExcelApiRouter(app)

// Redirect
app.get('/', (req, res, next) => {
  try {
    res.redirect('/api/web/usuarios')
  } catch(err) {
    next(err)
  }
})

// Verify router
app.use((req, res, next) => {
  const {
    output: { statusCode, payload }
  } = boom.notFound()

  res.status(statusCode).json(payload)
})

// Error handlers
app.use(logErrors)
app.use(wrapErrors)
app.use(clientErrorHandler)

export default app
