

class Usuario {

    async login(req, res) {

        let Usuario = require('../models/usuarios')
        console.log(req.body)
        let usuario = await Usuario.find({ usuario: req.body.usuario, senha: req.body.senha });

        if (usuario.length > 0) {
            var jwt = require('jsonwebtoken');
            var token = jwt.sign({ id: usuario[0]._id }, 'betanoisapowerQ2aw3@se4');
            res.send(token);
        } else
            res.status(500).send();

    }

    async adicionaUsuario(req, res) {

        let Usuario = require('../models/usuarios')
        let usuario = await Usuario.find({ usuario: req.body.usuario })


        if (usuario.length > 0) {
            res.status(500).send({ message: 'Já existe outro usuario com este mesmo nome de usuario no sistema.' })
        } else {

            usuario = new Usuario({
                nome: req.body.nome,
                usuario: req.body.usuario,
                senha: req.body.senha,
                permissoes: {
                    criarUsuario: req.body.permissoes.criarUsuario,
                    alterarEstrategias: req.body.permissoes.alterarEstrategias
                }
            })


            await usuario.save();
            res.send();
        }

    }

}


module.exports = new Usuario();

