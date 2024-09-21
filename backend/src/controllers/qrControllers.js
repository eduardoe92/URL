const QR = require('../models/qrModel');

const createQRCode = async (req, res) => {
    const { data } = req.body;

    const qr = new QR({
        userId: req.user._id,
        data,
    });

    await qr.save();
    res.status(201).json(qr);
};

const getQRHistory = async (req, res) => {
    const qrCodes = await QR.find({ userId: req.user._id });
    res.json(qrCodes);
};

module.exports = { createQRCode, getQRHistory };
