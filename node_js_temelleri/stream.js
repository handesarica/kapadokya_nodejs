// Stream işlemleri 

const { time } = require("console");

// Stream okuma

// const fs = require('fs');
// var data = '';
// // okunabilir stream
// const readStream = fs.createReadStream('textFile.txt');

// // stream olaylarını yönet
// // stream bölüm bölüm iletilir => chunk
// readStream.on('data', function(chunk){
//     data += chunk;
// });

// readStream.on('end', function(){
//     console.log(data);
// });

// // hata yakalama
// readStream.on('error', function(err){
//     console.log(err.stack);
// });

// console.log("merhaba");



// // Stream yazma
// const fs = require('fs');
// var data = 'bu bir write stream olayıdır';
// // yazılabilir stream

// const writeStream = fs.createWriteStream('newFile.txt');
// // Türkçe karakterler için utf-8 tanımı
// writeStream.write(data, 'utf-8');
// writeStream.end();

// writeStream.on('finish', function(){
//     console.log("yazma islemi bitti");
// });

// // hata yakalama
// writeStream.on('error', function(err){
//     console.log(err.stack);
// });

// //  Stream Pipe

// const fs = require('fs');

// // yazılabilir stream
// const readStream = fs.createReadStream('newFile.txt');
// // okunabilir stream
// const writeStream = fs.createWriteStream('newFile.txt');

// readStream.pipe(writeStream);


function timerFunc (){
    console.log("gecikmeli calisan fonksiyon");
}

setTimeout(timerFunc, 4000);
setInterval(timerFunc, 1000);
