var express = require('express');
var router = express.Router();
var axios = require('axios')
var env = require('../config/env')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint)
    .then(response => {
      res.render('index', {plist: response.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint+ '/' + req.params.id)
    .then(response => {
      console.log(response.data)
      res.render('planta', {p: response.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});


router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint+ '?especie=' + req.params.id)
    .then(response => {
        res.render('especie', {plist: response.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

module.exports = router;
