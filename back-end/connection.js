const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'clientuser',
    password: 'clientpass',
    database: 'KitapcimDB',
    multipleStatements: true
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;