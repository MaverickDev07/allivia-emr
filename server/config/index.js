/*import dotenv from 'dotenv'
dotenv.config()*/
require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
  storage: process.env.STORAGE,
  dbUser: process.env.PDB_USER,
  dbPassword: process.env.PDB_PASSWORD,
  dbHost: process.env.PDB_HOST,
  dbPort: process.env.PDB_PORT,
  dbName: process.env.PDB_NAME,
  dbDialect: process.env.PDB_DIALECT,
  authJwtSecret: process.env.AUTH_JWT_SECRET
}

module.exports = { config }
