const { Router } = require('express');
const router = Router();

const { cadastroCaso } = require('../controller/admCadastroCasoController.js');

router.post('/cadastroCaso/adm', cadastroCaso);

module.exports = router;