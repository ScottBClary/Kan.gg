// ^
// The end$   exact string match (starts and ends with The end)
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  fieldDelimiter: ';',
  header: [
    {id: 'kanji', title: 'Kanji'},
    {id: 'definition', title: 'Definition'},
    {id: 'pronounciation', title: 'Pronounciation'},
    {id: 'grade', title: 'Grade'},
  ]
});
const path = require('path');
const fs = require('fs');
console.log(__dirname);
const readLine = require('readline');
const f = require('fs');
var inFile = './output.txt';
var outFile = '/output2.txt';
var rl = readLine.createInterface({
    input : f.createReadStream(__dirname+'/output.txt'),
    output : process.stdout,
    terminal: false
});
var header = ['kanji', 'definition', 'pronounciation', 'grade'];

var totalOutput = '';

fs.writeFile(path.join(__dirname,'output2.txt'), 'Kanji List', err => {
  if (err) {
    console.error(err);
  } else {
    console.log('written successfully');
  }
});

var allData = [];
var inTableRow = false;
var currentRow = '';
var rowNum = 0;
rl.on('line', function (text) {

  let containsDelimiter = false;
  if (text.includes('<tr>')) {
    //console.log(currentRow);
    currentRow = text;
  } else if (text.includes('</tr>')) {
    currentRow += text;

    console.log(currentRow);
    console.log('\n');
    let e1 = currentRow.match(/<td(.*?)\/td>/g);
    if (e1 === null) {
      return;
    }
    console.log('e1 before ' + e1);
    console.log('8, 7, 5, 3');
    let grade = e1[5];
    let definition = e1[7];
    let pronounciation = e1[8];
    let kanji = e1[3];
    grade = grade || '';
    grade = grade.replace(/<td>|<\/td>/g, '');
    definition = definition || '';
    definition = definition.replace(/<td>|<\/td>/g, '');
    pronounciation = pronounciation || '';
    pronounciation = pronounciation.match(/<td>(.*?)</) || '';
    if (pronounciation.length > 1) {
      pronounciation = pronounciation[1];
    }
    // pronounciation = pronounciation.slice(4);
    kanji = currentRow.match(/<a(.*?)\/a>/);
    kanji = kanji || '';
    kanji = kanji[0];
    kanji = kanji.match(/>(.*?)<\/a/);
    kanji = kanji[1] || undefined;
    console.log('Grade ' + grade);
    console.log('Definition ' + definition);
    console.log('Pronounciation ' + pronounciation);
    console.log('Kanji ' + kanji);

    e2 = {kanji: kanji, definition: definition, pronounciation: pronounciation, grade: grade};
    allData.push(e2);

    currentRow = '';
  } else {
    currentRow += text;
  }
  rowNum++;
}).on('close', () => {
  csvWriter
  .writeRecords(allData)
  .then(()=> console.log('The CSV file was written successfully'));
});



    // console.log('original kanji ' + kanji);
    // if (e1 === null) {
    //   e1 = [];
    // }
    // if (kanji === null) {
    //   kanji = [];
    // }
    // // console.log('kanji before: ' + kanji);
    // let kanji2 = kanji.map(function(val){
    //   return val.replace(/<(.*?)>/g,'');
    // })
    // let e2 = e1.map(function(val){
    //   return val.replace(/<(.*?)>/g,'');
    // });
    // console.log(e1.length);
    // if (e1.length >= 7) {

    // console.log(grade);
    // console.log(definition);
    // console.log(pronounciation);

    // kanji2 = kanji2[0];
    // console.log(kanji2);
    // kanji2 = kanji2.match(/[^a-z<>]+/);
    // kanji2 = kanji2 || 0;
    // kanji2 = kanji2[0];
    // console.log(kanji2);
    // }
    // console.log('kanji after: ' + kanji2);
    // e2 = e2 || '';
    // e2 = e2.toString();
    // console.log(e2);
    // e2 = e2.split(',');
    // if (kanji2.length > 1 && e2.length >= 8){

    // let actualKanji = kanji2[0];
    // let pronounciation = e2[6];
    // let definition = e2[5]
    // console.log([actualKanji, definition, pronounciation]);
    // }
    // console.log(e2);
    // console.log('kanji is ' + kanji2);
    // e2 = 'Line #'+rowNum+' ' + e2 + ' ' + kanji2;
    // e2 += '\n';