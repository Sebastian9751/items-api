import { Router } from 'express';
import { methods } from '../controllers/item.controller.js';
const router = Router();

router.get('/', methods.finAll);

router.post('/create', methods.create);

router.put('/update', methods.update);

export default router;
