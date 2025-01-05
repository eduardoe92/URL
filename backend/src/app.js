const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
