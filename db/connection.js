const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Aaninho@##@21',
        port: 3306,
        database: 'company'
    },
    console.log('Connected to the company database.')
);

module.exports = db;