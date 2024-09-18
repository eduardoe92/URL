const express = require('express');
const { createQRCode, getQRHistory } = require('../controllers/qrController');

const router = express.Router();

router.post('/create', createQRCode);
router.get('/history', getQRHistory);

module.exports = router;
