// Web server oluşturma

const http = require('http');

// // server oluştur
// http.createServer(function(req,res){
//     // istemciye yanıt dönsün
//     res.write('Hello Node.js');
//     // response sonlandır
//     res.end();
//     // 8080 portundan sunucu dinleme yapsın
// }).listen(8080);

// console.log("sunucu calisiyor !!! durdurmak için Ctrl+C bas");

// // callback fonksiyon tanımı
// // arrow func
// http.createServer((req, res) => {
// });


// // HTML Web Server
// http.createServer(function(req, res){
//     // HTML içerik için görüntülenecek head başlığı
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

//     // response bitir
//     // HTML body alanı
//     res.end('Node.js ile Programlama');
// }).listen(8080);

// console.log("sunucu calisiyor !!! durdurmak için Ctrl+C bas");

// Web server URL ayarı

http.createServer(function(req, res){
    // status: OK
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    // url isteği değiştiğinde yapılacak
    if(req.url == '/' || req.url == '/anasayfa')
    {
        res.write('Anasayfaya hoşgeldiniz.');
    }
    else if (req.url == '/iletisim')
    {
        res.write('İletişim sayfasına hoşgeldiniz');        
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    }

    res.end();
}).listen(8080);

console.log("sunucu calisiyor !!! durdurmak için Ctrl+C bas");

