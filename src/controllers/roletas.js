
class Roletas {

    async listagem(req, res) {

        let Roleta = require('../models/roletas')
        let roleta;

        if(req.query.tipo)
            roleta = await Roleta.find({tipo:req.query.tipo, nome: req.query.roleta })
        else
            roleta = await Roleta.find({ nome: req.query.roleta })

        res.send(roleta);
    }

}


module.exports = new Roletas();