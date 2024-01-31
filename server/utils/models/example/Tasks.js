import Sequelize from 'sequelize'
import PostgresqlLib from '../../../lib/postgresql'

const PostgreSQL = new PostgresqlLib()

const Task = PostgreSQL.connect().define('tasks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  done: {
    type: Sequelize.BOOLEAN
  },
  projectid: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
})

export default Task
