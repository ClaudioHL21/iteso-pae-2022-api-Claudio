const router = require('express').Router();
const controller = require('./users.controller');

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
router.get('/', controller.getAll);

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
 *       description: Crea un usuario que no exista en la base de datos
 *       parameters:
 *         - in: body
 *           name: user
 *           description: datos de nuevo usario
 *           schema:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - password
 *                  - role
 *              properties:
 *                  name:
 *                      type: String
 *                  email:
 *                      type: String
 *                  password:
 *                      type: String
 *                  role:
 *                      type: String
 *       responses:
 *         200:
 *           description: Objeto con datos del usuario
 */
router.post('/', controller.create);
router.post('/login', controller.login);
router.post('/invite', controller.linkInvite);

module.exports = router;

