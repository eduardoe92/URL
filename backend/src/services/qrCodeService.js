const QrCode = require('@/models/qrCodeModel');

exports.createQrCodeForUser = async (userId, content) => {
    const qrCode = await QrCode.create({ userId, content });
    return qrCode;
};

exports.getQrCodesByUser = async (userId) => {
    const qrCodes = await QrCode.findAll({ where: { userId } });
    return qrCodes;
};
