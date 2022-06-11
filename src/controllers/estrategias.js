
class Estrategia {

    async cadastrar(req, res) {
        let Estrategia = require('../models/estrategia');

        if (req.body.id == "") {
            let estrategia = new Estrategia(req.body);
            await estrategia.save();
        }else{
            await Estrategia.updateOne({_id: req.body.id},req.body)           
        }
        res.send();
    }

    async estrategia(req, res) {
        let Estrategia = require('../models/estrategia');
        let estrategias = await Estrategia.find({ status: 1 });
        res.send(estrategias);
    }

    async estrategiaID(req, res) {
        let Estrategia = require('../models/estrategia');
        let estrategias = await Estrategia.findOne({ _id: req.params.id, status: 1 });
        res.send(estrategias);
    }

       

}


module.exports = new Estrategia();