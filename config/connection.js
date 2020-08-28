const mysql = require('mysql2')

module.exports = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/burger_db')
