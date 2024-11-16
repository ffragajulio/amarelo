const { Router } = require('express');
const router = Router();

const { cadastroPad } = require('../controller/padCadastroController.js');

router.post('/cadastro/pad', cadastroPad);

module.exports = router;

console.log('passou router');
