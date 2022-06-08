
class Maquina {

    async sinal(req, res) {

        let Maquina = require('../models/roletas')
        let maquinas = await Maquina.find({ maquina: req.body.maquina })

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
        res.send();
    }

}


module.exports = new Maquina();