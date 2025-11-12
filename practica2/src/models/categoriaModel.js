import conexion from '../config/db.js';

const Categoria = {
  getAll: (callback) => {
    conexion.query('SELECT * FROM categorias', callback);
  },

  getById: (id, callback) => {
    const sql = `
      SELECT c.*, p.id AS producto_id, p.nombre AS producto_nombre, p.precio, p.stock
      FROM categorias c
      LEFT JOIN productos p ON c.id = p.categoria_id
      WHERE c.id = ?`;
    conexion.query(sql, [id], callback);
  },

  create: (data, callback) => {
    conexion.query('INSERT INTO categorias SET ?', data, callback);
  },

  update: (id, data, callback) => {
    conexion.query('UPDATE categorias SET ? WHERE id = ?', [data, id], callback);
  },

  delete: (id, callback) => {
    conexion.query('DELETE FROM categorias WHERE id = ?', [id], callback);
  }
};

export default Categoria;
