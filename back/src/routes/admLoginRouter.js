const { Router } = require('express');
const router = Router();

const { loginAdm } = require('../controller/admLoginController');

router.post('/login/adm', loginAdm);

module.exports = router;