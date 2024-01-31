import { Router } from 'express'
import { getProjects, getOneProject, createProject, updateProject, deleteProject } from '../../services/example/project.service'

const router = Router()

// /api/projects/
router.get('/', getProjects)
router.post('/', createProject)

// /api/projects/:projectID
router.get('/:id', getOneProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

export default router
