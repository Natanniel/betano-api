
class Estrategia {

    async cadastrar(req, res) {
        let Estrategia = require('../models/estrategia');       
        let estrategia = new Estrategia(req.body);
        await estrategia.save();
        res.send();
    }

    async estrategia(req, res) {
        let Estrategia = require('../models/estrategia');       
        let estrategias = await Estrategia.find({status : 1});
        res.send(estrategias);
    }


}


module.exports = new Estrategia();