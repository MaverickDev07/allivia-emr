import Sequelize from 'sequelize'
import PostgresqlLib from '../../../lib/postgresql'

import Task from './Tasks'

const PostgreSQL = new PostgresqlLib()

const Project = PostgreSQL.connect().define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  priority: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  deliverydate: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
})

// 1aN Un proyecto tiene muchas tareas
Project.hasMany(Task, { foreingKey: 'projectid', sourceKey: 'id' })
// Muchas tareas tienen un solo proyecto
Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id' })

export default Project
