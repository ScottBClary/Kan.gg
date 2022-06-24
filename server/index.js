const express = require("express");
const path = require("path");
require("dotenv").config();
const mysql = require('mysql2');
const app = express();
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
if (process.env.ENV === 'SERVER') {
  db = mysql.createConnection({
    host: process.env.DBIP,
    user: 'remote',
    database: 'Kanji',
    password: process.env.PASSWORD,
    multipleStatements: true,
  });
  console.log('connection created at ' + process.env.DBIP );
} else {
  db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Kanji',
    password: '',
    multipleStatements: true,
  });
  console.log('connection created at localhost' );
}
app.get('/randomKanji', (req, res) => {
  db.query(`SELECT * FROM KanjiTable WHERE GRADE = ${req.query.grade} ORDER BY RAND() LIMIT 1`, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result[0]);
    }
  })
});