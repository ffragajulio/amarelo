const { Router } = require('express');
const router = Router();

const { storeAdm } = require('../controller/admController');
const { loginAdm } = require('../controller/admLoginController');

router.post('/store/adm', storeAdm);
router.post('/loginadm', loginAdm)

module.exports = router;