var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dados = {
    title: 'Aula Server Side',
    professor: 'Guilherme',
  }
  res.render('index', dados);
});

module.exports = router;
