const { Router } = require('express');
const router = Router();

const { loginPad } = require('../controller/padLoginController');

router.post('/login/pad', loginPad);

module.exports = router;