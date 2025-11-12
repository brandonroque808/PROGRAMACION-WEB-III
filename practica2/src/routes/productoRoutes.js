import express from 'express';
import {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  updateStock
} from '../controllers/productoController.js';

const router = express.Router();

router.get('/', getProductos);
router.get('/:id', getProductoById);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.patch('/:id/stock', updateStock);

export default router;
