const { Router } = require('express');
const router = Router();

const { storeAdm } = require('../controller/admController');

router.post('/store/adm', storeAdm);

module.exports = router;