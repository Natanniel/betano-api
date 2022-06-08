const express = require('express');
const router = express.Router();
const Estrategia = require('../controllers/estrategias');

router.post('/estrategia/cadastro', Estrategia.cadastrar);
router.get('/estrategia', Estrategia.estrategia);
router.get('/estrategia/:id', Estrategia.estrategiaID)

module.exports = router; 