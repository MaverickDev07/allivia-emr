import Task from '../../utils/models/example/Tasks'

export async function createTask(req, res) {
  const { name, done, projectid } = req.body
  try {
    const newTask = await Task.create({
      name,
      done,
      projectid
    }, {
      fields: ['name', 'done', 'projectid']
    })
    res.json({
      message: 'New task created',
      data: newTask
    })
  } catch (error) {
    console.log(error)
  }
}


export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll()
    res.json({
      message: 'Find All Tasks',
      data: tasks
    })
  } catch (error) {
    console.log(error)
  }
}

/*
export async function updateTask() {
}

export async function deleteTask() {
}

export async function getOneTask() {
}

export async function getTasksByProject() {
}
*/