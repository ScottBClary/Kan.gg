require("dotenv").config();
const path = require('path');
const mysql = require('mysql2');
const fs = require('fs');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
  database: 'Kanji',
  flags: ['+LOCAL_FILES'],
  
});

console.log(__dirname);
var thePath = path.join(__dirname, '../out.csv');
console.log(thePath);
db.query({sql:`LOAD DATA LOCAL INFILE '${thePath}' into TABLE KanjiTable FIELDS TERMINATED BY ';' LINES TERMINATED BY '\n' IGNORE 1 ROWS (kanji, definition, pronounciation, grade)`,
  infileStreamFactory: () => fs.createReadStream(thePath),
});
