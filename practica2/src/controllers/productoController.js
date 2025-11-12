import Producto from '../models/productoModel.js';

export const getProductos = (req, res) => {
  Producto.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const getProductoById = (req, res) => {
  Producto.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const createProducto = (req, res) => {
  Producto.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto creado', id: result.insertId });
  });
};

export const updateProducto = (req, res) => {
  Producto.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto actualizado' });
  });
};

export const updateStock = (req, res) => {
  const { cantidad } = req.body;
  Producto.updateStock(req.params.id, cantidad, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Stock modificado' });
  });
};
