var express = require('express');
var router = express.Router();

// var todosController = require('../controllers/todos');

// Require controllers.
var usersCtrl = require('../controllers/users');

// Require token authentication.
var token = require('../config/token_auth');

// users resource paths:
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);

router.post('/token',    token.create);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gram Gram' });
});

// // http://127.0.0.1:3000/api/todos
// router.route('/api/todos')
//   //GET all todos
//   .get(todosController.index)
//   //POST a new todo
//   .post(todosController.create);
//
// router.route('/api/todos/:id')
//   // GET a specific todo
//   .get(todosController.show)
//   // PATCH update existing todo
//   .patch(todosController.update)
//   // DELETE remove specific todo from DB
//   .delete(todosController.destroy);

module.exports = router
