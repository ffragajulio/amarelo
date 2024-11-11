const { Router } = require('express');
const router = Router();

const { cadastroCaso } = require('../controller/admCasosController.js');

router.post('/casos/adm', cadastrarCaso);

module.exports = router;