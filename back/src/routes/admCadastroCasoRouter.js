const { Router } = require('express');
const router = Router();


const { cadastroCaso } = require('../controller/admCadastroCasoController.js');
const { cadastroApadrinhado } = require('../controller/admCadastroCasoController.js');

router.post('/cadastroCaso/adm', cadastroCaso);
router.post('/cadastroApadrinhado/adm', cadastroApadrinhado);


module.exports = router;