const mariadb  = require('mariadb');

 
const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'baiamare',
  database: 'capstoneremotely',
  port: 3306,
});
 

module.exports = pool;

