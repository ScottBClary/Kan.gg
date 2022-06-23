
const mysql = require('mysql2');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
});

db.query('CREATE DATABASE IF NOT EXISTS Kanji', (error, results, fields) => {
  if (error) {
    console.log(error);
    console.log('there was an error');
  } else {
    console.log('Kanji database exists');
    db.query('USE Kanji', (error, results, fields) => {
      if (error) {
        console.log(error);
        console.log('there was an error');
      } else {
        console.log('using kanji database');
        db.query('CREATE TABLE IF NOT EXISTS KanjiTable (kanji VARCHAR(255), definition VARCHAR(255), pronounciation VARCHAR(255), grade VARCHAR(2))', (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Kanji table exists');
          }
        });
      }
    });
  }
}
);