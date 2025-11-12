import express from 'express';
import categoriaRoutes from './routes/categoriaRoutes.js';
import productoRoutes from './routes/productoRoutes.js';

const app = express();

app.use(express.json());

app.use('/categorias', categoriaRoutes);
app.use('/productos', productoRoutes);

export default app;
