
class Roletas {

    async listagem(req, res) {

        let Roleta = require('../models/roletas')
        let roleta = await Roleta.find({ nome: req.query.roleta })



/*
        
       

        if (maquinas.length > 0) {
            console.log('Máquina tem cadastro');
        } else {

            console.log('Máquina cadastrada')
            let maquina = new Maquina({
                //  ultimoSinal: Date.now(),
                maquina: req.body.maquina,
                //   baterias :[]
            })



            await maquina.save();


        }
*/
        res.send(roleta);
    }

}


module.exports = new Roletas();