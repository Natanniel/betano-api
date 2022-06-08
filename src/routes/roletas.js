const express = require('express');
const router = express.Router();
const Roletas = require('../controllers/roletas');

router.get('/roletas', Roletas.listagem);

module.exports = router; 