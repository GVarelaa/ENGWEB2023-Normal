var Planta = require('../models/planta')

module.exports.list = () => {
    return Planta
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlanta = id => {
    return Planta
            .findOne({_id: id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getEspecie = esp => {
    return Planta
            .find({Espécie: esp})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getImplant = implant => {
    return Planta
            .find({Implantação: implant})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getFreguesias = () => {
    return Planta
            .distinct("Freguesia")
            .sort()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getEspecies = () => {
    return Planta
            .distinct("Espécie")
            .sort()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.addPlanta = p => {
    return Planta
            .create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}



module.exports.deletePlanta = id => {
    return Planta
            .deleteOne({_id:id})
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}