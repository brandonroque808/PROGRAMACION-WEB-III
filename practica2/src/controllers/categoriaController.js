import Categoria from '../models/categoriaModel.js';

export const getCategorias = (req, res) => {
  Categoria.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const getCategoriaById = (req, res) => {
  Categoria.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const createCategoria = (req, res) => {
  Categoria.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoria creada', id: result.insertId });
  });
};

export const updateCategoria = (req, res) => {
  Categoria.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoria actualizada' });
  });
};

export const deleteCategoria = (req, res) => {
  Categoria.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoria eliminada' });
  });
};
