const { Router } = require('express');
const router = Router();

const { cadastroAdm } = require('../controller/admCadastroController');

router.post('/cadastro/adm', cadastroAdm);

module.exports = router;