import { Router } from 'express';
import { methods } from '../controllers/item.controller.js';
import { validateHeaders } from '../middlewares/headers-validator/index.js';
import { validateSchema } from '../middlewares/joi-validator/index.js';
import * as schemas from '../schemas/item/index.js';

const router = Router();

router.get('/', validateHeaders, methods.findAll);

router.post(
    '/create',
    validateHeaders,
    validateSchema(schemas.createItemSchema),
    methods.create
  );

router.put(
    '/update/:id', 
    validateHeaders,
    validateSchema(schemas.updateItemSchema),
    methods.update);

export default router;
