const { DataTypes } = require('sequelize');
const sequelize = require('@/config/database');
const User = require('./userModel');

const QrCode = sequelize.define('QrCode', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

QrCode.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(QrCode, { foreignKey: 'userId' });

module.exports = QrCode;
