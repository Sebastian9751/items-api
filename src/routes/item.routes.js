import { Router } from 'express';
import { methods } from '../controllers/item.controller.js';
import { validateHeaders } from '../middlewares/headers-validator/index.js';
const router = Router();

router.get('/', validateHeaders, methods.finAll);

router.post('/create', methods.create);

router.put('/update/:id', methods.update);

export default router;
