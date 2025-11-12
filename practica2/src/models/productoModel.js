import conexion from '../config/db.js';

const Producto = {
  getAll: (callback) => {
    const sql = `
      SELECT p.*, c.nombre AS categoria_nombre
      FROM productos p
      JOIN categorias c ON p.categoria_id = c.id`;
    conexion.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = `
      SELECT p.*, c.nombre AS categoria_nombre
      FROM productos p
      JOIN categorias c ON p.categoria_id = c.id
      WHERE p.id = ?`;
    conexion.query(sql, [id], callback);
  },

  create: (data, callback) => {
    conexion.query('INSERT INTO productos SET ?', data, callback);
  },

  update: (id, data, callback) => {
    conexion.query('UPDATE productos SET ? WHERE id = ?', [data, id], callback);
  },

  updateStock: (id, cantidad, callback) => {
    const sql = 'UPDATE productos SET stock = stock + ? WHERE id = ?';
    conexion.query(sql, [cantidad, id], callback);
  }
};

export default Producto;
