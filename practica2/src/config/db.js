import mysql from 'mysql2';

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tienda'
});

conexion.connect((err) => {
  if (err) {
    console.log('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexion exitosa a la base de datos');
  }
});

export default conexion;
