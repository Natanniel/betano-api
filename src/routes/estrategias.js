const express = require('express');
const router = express.Router();
const Estrategia = require('../controllers/estrategias');

router.post('/estrategia/cadastro', Estrategia.cadastrar);
router.get('/estrategia', Estrategia.estrategia)

module.exports = router; 