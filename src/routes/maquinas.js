const express = require('express');
const router = express.Router();
const Maquina = require('../controllers/maquina');

router.post('/maquinas/sinal', Maquina.sinal);

module.exports = router; 