const router = require('express').Router();
const controller = require('./messages.controller');

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/messages/{id}:
  *     get:
  *       tags:
  *       - Messages
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
  *       - Users
  *       description: Crea un mensaje
  *       parameters:
  *         - in: body
  *           name: message
  *           description: datos del mensaje
  *           schema:
  *              type: object
  *              required:
  *                  - channel
  *                  - messageBody
  *                  - date
  *              properties:
  *                  channel:
  *                      type: String
  *                  messageBody:
  *                      type: String
  *                  date:
  *                      type: Date
  *       responses:
  *         200:
  *           description: Objeto con la información del mensaje
  */
 router.post('/', controller.create);
 
 module.exports = router;
