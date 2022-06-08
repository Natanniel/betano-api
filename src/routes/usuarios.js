const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/usuarios');

router.post('/usuarios/cadastrar', Usuario.adicionaUsuario);
router.post('/usuarios/login', Usuario.login);

module.exports = router; 