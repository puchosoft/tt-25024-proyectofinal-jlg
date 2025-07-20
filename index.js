// index.js

import express from 'express';
import cors from 'cors';
import productRoutes from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Rutas de productos
app.use('/api/products', productRoutes);

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).json({ message: '404 - Recurso inexistente' });
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
