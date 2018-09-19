let mysql = require('mysql');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'bookstore',

});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

conn.query('SELECT * FROM table_name;', function(err, rows) {
  console.log('Data received from Db:\n');
  console.log(rows);
});

conn.end();
