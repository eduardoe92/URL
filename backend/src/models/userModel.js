const { DataTypes } = require('sequelize');
const sequelize = require('@/config/database');

const User = sequelize.define('User', {
    githubId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
