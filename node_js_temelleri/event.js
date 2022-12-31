// Event işlemleri

// // events import
// const events = require('events');
// // EventEmitter sınıfından nesne üret
// const eventNesnesi = new events.EventEmitter();
// // event ile event işleyicisini bağlama => eventHandler
// eventNesnesi.on('eventName', eventHandler);
// // event tetikleme
// eventNesnesi.emit('eventName');

// // event example
// const events = require('events');
// const evenEmitter = new events.EventEmitter();

// // bağlantı kontrolü yapan fonksiyon
// const connectionHandler = function connect (){
//     console.log("baglanti basariyla yapildi");

//     // tetikleme
//     evenEmitter.emit('veri_al');
// }

// evenEmitter.on('baglanti', connectionHandler);

// evenEmitter.on('veri_al', function(){
//     console.log("veri basarili sekilde iletildi");
// });

// evenEmitter.emit('baglanti');


// // event example
// const events = require('events');
// const evenEmitter = new events.EventEmitter();

// // event tanımı
// // eventName = '...'
// evenEmitter.on('calistir', (data) => {
//     console.log(`event cagirildi...: ${data.name} ${data.surname}`);
// });
// // tetikleme
// evenEmitter.emit('calistir', {name: "kapadokya", surname: "universitesi"});

// Http Server Oluşturma
const http = require('http');

// server.on('connection', function(){
//     console.log("connection is ready");
// });
// server.emit();
var server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(8080);
console.log("Listening on port: 8080");