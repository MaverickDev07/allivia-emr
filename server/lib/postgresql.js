import Debug from 'debug'
import Sequelize from 'sequelize'
import { config } from '../config'

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const debug = Debug('app:psql')

class PostgresqlLib {
  constructor() {
    debug("PostgresqlLib")
    this.client = new Sequelize(
      DB_NAME,
      USER,
      PASSWORD,
      {
        host: config.dbHost,
        dialect: config.dbDialect,
        pool: {
          max: 5,
          min: 0,
          require: 30000,
          idle: 10000
        },
        logging: false
      }
    )
  }

  connect() {
    return new Sequelize(
      DB_NAME,
      USER,
      PASSWORD,
      {
        host: config.dbHost,
        dialect: config.dbDialect,
        pool: {
          max: 5,
          min: 0,
          require: 30000,
          idle: 10000
        },
        logging: false
      }
    )
  }

  /*getAll(model, { query={}, skip=0, limit=0, projection={} } = {}) {
    debug('getAll: ', model, query, skip, limit, projection )
    
  }

  get(collection, id, projection={}) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) }, { projection })
    })
  }

  create(model, data) {
    debug('create: ', model, data )
    return model.create(data)
  }*/

  /*update(collection, id, data, inc={}) {
    return this.connect()
      .then(db => {
        if(Object.keys(inc).length)
          return db
            .collection(collection)
            .updateOne({ _id: ObjectId(id) }, { $inc: inc, $set: data }, { upsert: true })
        else
          return db
            .collection(collection)
            .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
      })
      .then(result => result.upsertedId || id)
  }

  delete(collection, id) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .deleteOne({ _id: ObjectId(id) })
      })
      .then(_ => id)
  }

  async populate(list, field, match, { projection={}, array=false }={}) {
    if (array) {
      for (const el of list)
        if (el[field])
          el[field] = await this.connect().then(db => {
            return db
              .collection(match)
              .find({ _id: {$in: el[field]} })
              .project(projection)
              .toArray()
          })
    }
    else {
      for (const el of list)
        if (el[field]) {
          el[field] = await this.connect().then(db => {
            return db.collection(match).findOne({ _id: ObjectId(el[field]) }, { projection })
          })
        }
    }
  }

  add(collection, id, field) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $addToSet: field })
      })
      .then(result => result.upsertedId || id)
  }

  remove(collection, id, field) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $pull: field })
      })
      .then(result => result.modifiedCount)
  }

  deleteAllByField(collection, query) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .deleteMany(query)
      })
      .then(result => result.deletedCount)
  }*/
}

module.exports = PostgresqlLib
