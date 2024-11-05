const { Router } = require('express');
const router = Router();

const { casosAdm } = require('../controller/admCasosController');

router.post('/casos/adm', casosAdm);

module.exports = router;