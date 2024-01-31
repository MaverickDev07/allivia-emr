import { Sequelize } from 'sequelize'
import { config } from '../config'
import setupModels from '../db/models'
require('pg').defaults.parseInt8 = true

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: config.dbDialect
})

setupModels(sequelize)

module.exports = sequelize
