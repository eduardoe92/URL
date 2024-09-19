import QR from '../models/qrModel.js';

const createQRCode = async (req, res) => {
    const { data } = req.body;

    try {
        const qr = await QR.create({
            userId: req.user.id,
            data,
        });
        res.status(201).json(qr);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el QR code', error });
    }
};

const getQRHistory = async (req, res) => {
    try {
        const qrCodes = await QR.findAll({ where: { userId: req.user.id } });
        res.json(qrCodes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el historial de QR codes', error });
    }
};

export { createQRCode, getQRHistory };
