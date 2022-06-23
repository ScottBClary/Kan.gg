const axios = require('axios');
const fs = require('fs');
const path = require('path');



var content = 'This is test output';
var output = 'asdf';
var save = function(result) {
  fs.writeFile(path.join(__dirname,'output.txt'), result, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('written successfully');
    }
  });
};

axios.get('https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji').then((result) => {
  console.log('did we get here');
  return result.data;
}).then((result) => {save(result)}).catch((err) => {
  console.log('there was an error: '+ err);
});



