import { Router } from 'express';
import { methods } from '../controllers/item.controller.js';
import { validateHeaders } from '../middlewares/headers-validator/index.js';
import { validateSchema } from '../middlewares/joi-validator/index.js';
import * as schemas from '../schemas/item/index.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Items Module
 *     description: Api of items
 */

/**
 * @swagger
 * /item:
 *   get:
 *     summary: Get Items
 *     tags: [Items Module]
 *     parameters:
 *       - in: header
 *         name: x-date
 *         required: true
 *         schema:
 *           type: string
 *           example: multipart/form-data
 *         description: The date in multipart/form-data format
 *       - in: header
 *         name: x-signature
 *         required: true
 *         schema:
 *           type: string
 *           example: 1f4e24ddce7dec4d5d326bf4ff4383e69f422b77db54365148c301e1db1fc8a9
 *         description: The signature for authentication
 *       - in: header
 *         name: x-authentication
 *         required: true
 *         schema:
 *           type: string
 *           example: token
 *         description: The authentication token
 *     responses:
 *       200:
 *         description: List of items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_item:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Hi I am an item
 *                       price:
 *                         type: string
 *                         example: 51.00
 */
router.get('/', validateHeaders, methods.findAll);

/**
 * @swagger
 * /item/create:
 *   post:
 *     summary: Create a new item
 *     tags: [Items Module]
 *     parameters:
 *       - in: header
 *         name: x-date
 *         required: true
 *         schema:
 *           type: string
 *           example: multipart/form-data
 *         description: The date in multipart/form-data format
 *       - in: header
 *         name: x-signature
 *         required: true
 *         schema:
 *           type: string
 *           example: f9161080ffd6ff246496e05d6f1a782598f1d673cd769d13fdf8f6044742118c
 *         description: The signature for authentication
 *       - in: header
 *         name: x-authentication
 *         required: true
 *         schema:
 *           type: string
 *           example: token
 *         description: The authentication token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Item
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 25.00
 *     responses:
 *       200:
 *         description: Item creation success message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Item has been created
 */
router.post(
	'/create',
	validateHeaders,
	validateSchema(schemas.createItemSchema),
	methods.create,
);

/**
 * @swagger
 * /item/update/{id}:
 *   put:
 *     summary: Update an existing item
 *     tags: [Items Module]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: The ID of the item to update
 *       - in: header
 *         name: x-date
 *         required: true
 *         schema:
 *           type: string
 *           example: multipart/form-data
 *         description: The date in multipart/form-data format
 *       - in: header
 *         name: x-signature
 *         required: true
 *         schema:
 *           type: string
 *           example: d8b8881fa11531bbfc5538555b167f1a2a527065755a9aa70270b381c9ae6430
 *         description: The signature for authentication
 *       - in: header
 *         name: x-authentication
 *         required: true
 *         schema:
 *           type: string
 *           example: token
 *         description: The authentication token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Item edited
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 45.00
 *     responses:
 *       200:
 *         description: Item update success message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Item has been updated
 */
router.put(
	'/update/:id',
	validateHeaders,
	validateSchema(schemas.updateItemSchema),
	methods.update,
);

export default router;
