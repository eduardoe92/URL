import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const User = sequelize.define('User', {
    githubId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User;
