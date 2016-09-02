var express = require('express');
var router = express.Router();

var todosController = require('../controllers/todos');

// http://127.0.0.1:3000/api/todos
router.route('/api/todos')
  //GET all todos
  .get(todosController.index)
  //POST a new todo
  .post(todosController.create);

router.route('/api/todos/:id')
  // GET a specific todo
  .get(todosController.show)
  // PATCH update existing todo
  .patch(todosController.update)
  // DELETE remove specific todo from DB
  .delete(todosController.destroy);

module.exports = router
