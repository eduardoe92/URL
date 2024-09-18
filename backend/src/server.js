import express from 'express';
import dotenv from 'dotenv';
import { connectDB, sequelize } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import qrRoutes from './routes/qrRoutes.js';
import { protect } from './middlewares/authMiddleware.js';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

sequelize.sync().then(() => {
  console.log('Modelos sincronizados con la base de datos.');
});

app.use('/api/auth', authRoutes);
app.use('/api/qr', protect, qrRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
