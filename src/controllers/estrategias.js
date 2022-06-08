
class Estrategia {

    async cadastrar(req, res) {
        let Estrategia = require('../models/estrategia');       
        let estrategia = new Estrategia(req.body);
        await estrategia.save();
        res.send();
    }

}


module.exports = new Estrategia();