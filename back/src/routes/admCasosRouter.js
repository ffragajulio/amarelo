const { Router } = require('express');
const router = Router();

const { casosAdm } = require('../controller/casosController');

router.post('/casos/adm', casosAdm);

module.exports = router;