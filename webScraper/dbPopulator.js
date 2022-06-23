const mysql = require('mysql2');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
  database: 'Kanji',
});


db.query(`LOAD DATA LOCAL INFILE '/Users/scottclary/coding/kanjimvp/out.csv' into TABLE KanjiTable FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 ROWS (kanji, definition, pronounciation, grade)`, (err, results) => {
  if (err) {
    console.log('error occured');
    console.log(err);
  } else {
    console.log('successfully input csv into database');
  }
});
