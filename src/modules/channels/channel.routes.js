const router = require('express').Router();
const controller = require('./channels.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/channels/{id}:
  *     get:
  *       tags:
  *       - Channels
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);

 /**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
router.get('/:id', controller.getOne);

/**
 * @swagger
 *   /api/users:
 *     post:
 *       tags:
 *       - Channels
 *       description: Crea un nuevo canal
 *       parameters:
 *         - in: body
 *           name: channel
 *           description: datos de nuevo canal
 *           schema:
 *              type: object
 *              required:
 *                  -title
 *                  -description
 *                  -creatorEmail
 *              properties:
 *                  title:
 *                      type: String
 *                  description:
 *                      type: String
 *                  creatorEmail:
 *                      type: String
 *       responses:
 *         200:
 *           description: Objeto con datos del canal
 */
 router.post('/', controller.create);
 router.post('/invite/:id', controller.register);
module.exports = router;

