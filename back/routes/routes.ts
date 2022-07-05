import { Router } from 'express';
import { index } from './sensor';

const router = Router();

router.get('/', (request, response) => {
  response.json({ SERVER: 'ON' })
})

router.post('/sensor', index)

export default router
