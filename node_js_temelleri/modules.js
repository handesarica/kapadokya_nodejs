// Callback yapısı

// Blocking code

// file system import
const fs = require('fs');

// // senkron dosya okuma işlemi
// var data = fs.readFileSync('textFile.txt', 'utf-8');

// console.log(data.toString());
// console.log("merhaba");


// Unblocking code

// asenkron olarak dosya okuma işlemi
fs.readFile('textFile.txt', 'utf-8', function(err, data){
    if (err) return console.log(err);
    console.log(data.toString());
});

console.log("merhaba");
