var express = require('express');
var router = express.Router();

// var todosController = require('../controllers/todos');

// Require controllers.
var usersCtrl = require('../controllers/users');
var compCtrl = require('../controllers/compositions');
var subCtrl = require('../controllers/submissions');

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

// compositions paths
router.get('/compositions', token.authenticate,compCtrl.index);
router.post('/compositions', token.authenticate,compCtrl.create);
router.get('/compositions/:id', token.authenticate,compCtrl.show);

// submissions paths
router.get('/submissions', token.authenticate, subCtrl.index);
router.post('/submissions', token.authenticate, subCtrl.create);
router.get('/submissions/:id', token.authenticate, subCtrl.show);


module.exports = router
