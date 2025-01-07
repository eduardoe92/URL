const { validateQrCode } = require('@/utils/validators');

exports.validateQrCodeData = (req, res, next) => {
    const { error } = validateQrCode(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
