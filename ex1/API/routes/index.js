var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')



router.get('/plantas', function(req, res, next) {
  if(req.query && req.query.especie){
    Planta.getEspecie(req.query.especie)
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista"})
      })
  }
  else if(req.query && req.query.implant){
    Planta.getImplant(req.query.implant)
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista"})
      })  
  }
  else {
    Planta.list()
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista"})
      })
  }
});



router.get('/plantas/freguesias', function(req, res, next) {
  Planta.getFreguesias()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(523).json({erro: erro, mensagem: "Erro da lista de freguesias"})
    })
});


router.get('/plantas/especies', function(req, res, next) {
  Planta.getEspecies()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(524).json({erro: erro, mensagem: "Erro da lista de especies"})
    })
});

router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(522).json({erro: erro, mensagem: "Erro da planta"})
    })
});


router.post('/plantas', function(req, res, next) {
  Planta.addPlanta(req.body)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(525).json({erro: erro, mensagem: "Erro na adição de nova planta"})
    })
});


router.delete('/plantas/:id', function(req, res, next) {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(526).json({erro: erro, mensagem: "Erro na deleção de planta"})
    })
});


module.exports = router;
