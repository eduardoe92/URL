const QrCode = require('@/models/qrCodeModel');

exports.createQrCode = async (req, res) => {
    try {
        const { content } = req.body;
        const userId = req.user.id;

        const qrCode = await QrCode.create({ content, userId });
        res.status(201).json({ message: 'QR Code created successfully', qrCode });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

exports.getUserQrCodes = async (req, res) => {
    try {
        const userId = req.user.id;

        const qrCodes = await QrCode.findAll({ where: { userId } });
        res.status(200).json({ qrCodes });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};
