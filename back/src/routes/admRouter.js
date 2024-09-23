const { Router } = require('express');
const router = Router();

const { storeAdm, getAdm } = require('../controller/admController');

router.post('/store/adm', storeAdm);
router.post('/get/adm', getAdm);

module.exports = router;