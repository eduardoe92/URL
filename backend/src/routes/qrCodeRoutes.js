const express = require('express');
const { createQrCode, getUserQrCodes } = require('@/controllers/qrCodeController');
const { authenticateToken } = require('@/middlewares/authMiddleware');
const { validateQrCodeData } = require('@/middlewares/validationMiddleware');

const router = express.Router();

router.post('/create', authenticateToken, validateQrCodeData, createQrCode);
router.get('/', authenticateToken, getUserQrCodes);

module.exports = router;
