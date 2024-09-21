import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import User from './userModel.js';

const QR = sequelize.define('QR', {
    data: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(QR, { foreignKey: 'userId' });
QR.belongsTo(User, { foreignKey: 'userId' });

export default QR;
