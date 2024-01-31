import { Router } from 'express'
import { createTask, getTasks } from '../../services/example/task.service'

const router = Router()

// /api/tasks/
router.get('/', getTasks)
router.post('/', createTask)

export default router
