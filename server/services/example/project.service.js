// controller
import Project from '../../utils/models/example/Project'

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll()
    res.json({
      message: 'Find All Projects',
      data: projects
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getOneProject(req, res) {
  const { id } = req.params

  try {
    const project = await Project.findOne({
      where: { id }
    })
  
    res.json({
      data: 'Find One Project',
      project
    })
  } catch (error) {
    console.log(error)
  }
}

export async function createProject(req, res) {
  const {
    name,
    priority,
    description,
    deliverydate
  } = req.body
  try {
    let newProject = await Project.create({
      name,
      priority,
      description,
      deliverydate
    }, {
      fields: ['name', 'priority', 'description', 'deliverydate']
    })
    if (newProject) {
      return res.json({
        message: 'Project created successfully',
        data: newProject
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    })
  }
}

export async function updateProject(req, res) {
  const { id } = req.params
  const { name, priority, description, deliverydate } = req.body

  const projects = await Project.findAll({
    attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
    where: { id }
  })

  if ( projects.length > 0 ) {
    projects.forEach(async project => {
      await project.update({
        name,
        priority,
        description,
        deliverydate
      })
    })
  }

  return res.json({
    message: 'Project Updated Successfully',
    data: projects
  })
}

export async function deleteProject(req, res) {
  const { id } = req.params

  try {
    const deleteRowCount = await Project.destroy({
      where: { id }
    })
    res.json({
      message: 'Project Deleted succesfully',
      count: deleteRowCount
    })
  } catch (error) {
    console.log(error)
  }
}
