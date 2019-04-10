var express = require('express');
var router = express.Router();

var AuthControler = require('../Src/Controller/Auth/AuthController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', AuthControler.login);

module.exports = router;
