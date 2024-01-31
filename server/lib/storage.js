import { config } from '../config'

const storage = config.storage

if (!storage) {
  console.error(
    'Ruta de almacenamiento no definida, ',
    'establezca un valor para la variable de entorno "storage"'
  )
  process.exit(1)
}

module.exports = storage
