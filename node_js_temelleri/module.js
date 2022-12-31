// // PATH module
// const path = require('path');
// // resolve param = dosya konumu
// let resolve = path.resolve('index.html');
// console.log(resolve);

// // extname param = dosya uzantısı
// let extN = path.extname('index.html');
// console.log(extN);

// // basename param = dosya yolunun son bölümü
// let baseN = path.basename('index.html');
// console.log(baseN);

// // parse param = object döndürür
// let prs = path.parse(__filename);
// console.log(prs);

// console.log(prs.root);
// console.log(prs.dir);
// console.log(prs.base);
// console.log(prs.ext);
// console.log(prs.name);

// File System Module

const fs = require('fs');

// dosya okuma
fs.readFile('node.txt', 'utf-8', function(err,data){
    if(err) throw err;
    console.log(data);
});

// dosya yazma
//fs.writeFile('node.txt', 'merhaba dünya', 'utf-8', function(err,data)
fs.appendFile('node.txt', 'selam node.js', 'utf-8', function(err,data){    
    if(err) throw err;
    console.log('dosyaya başarıyla içerik eklendi.');
});

// dosya sil
fs.unlink('node.txt', function(err){
    if(err) throw err;
    console.log('dosya başarıyla silindi.');
});
