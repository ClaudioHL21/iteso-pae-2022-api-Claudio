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
 router.post('/', controller.create);
 router.post('/invite/:id', controller.register);
module.exports = router;

