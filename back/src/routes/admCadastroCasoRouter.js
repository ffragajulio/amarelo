const { Router } = require('express');
const router = Router();

const { cadastroCaso } = require('../controller/admCadastroCasoController.js');

router.post('/casos/adm', cadastroCaso);

module.exports = router;