const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');

// // Text response
// const server = http.createServer((req, res) => {

//     // response header
//     res.setHeader('Content-Type', 'text/plain');
//     res.statusCode = 200;
//     res.statusMessage = "OK";

//     // response body
//     res.write("hello node.js");
//     res.end();
// });

// server.listen(8080);
// console.log("listening on port 8080");

// // JSON response
// const server = http.createServer((req, res) => {

//     // response header
//     res.setHeader('Content-Type', 'application/json');
//     res.statusCode = 200;
//     res.statusMessage = "OK";

//     // response body
//     res.write(JSON.stringify({name: 'laptop', price: 50000}));
//     res.end();
// });

// server.listen(8080);
// console.log("listening on port 8080");

// // HTML responses
// const server = http.createServer((req, res) => {

//     // response header
//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode = 200;
//     // res.statusMessage = "OK";

//     // response body
//     res.write('<html>');
//     res.write('<head><title>HTML Web Page Area</title></head>');
//     res.write('<body><h1>Hello Node.js</h1></body>');
//     res.write('<body><h3>welcome page</h3></body>');
//     res.write('</html>');
//     res.end();   
// });

// server.listen(8080);
// console.log("listening on port 8080");


// // Bir dosyayı response olarak gönderelim
// const server = http.createServer((req, res) => {
//     // dosya okuma
//     fs.readFile('index.html', function(err, data) {
        
//         // hata varsa
//         if (err) {
//             res.setHeader('Content-Type', 'text/plain');
//             res.statusCode = 404;
//             res.statusMessage = 'Not Found!'
//             res.write("File is not found!");
//             res.end();
//         }
//         else {
//             res.setHeader('Content-Type', 'text/html');
//             res.statusCode = 200;
//             res.statusMessage = 'OK'
//             res.write(data);
//             res.end();
//         }
//     });
// });

// server.listen(8080);
// console.log("listening on port 8080");


// POST metodu
// HTML sayfası => text alanı, buton olsun

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text-html');
    if (url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Node.js HTML Web Page</title>
                </head>
                <body>
                    <form method="POST" action="/log">
                        <input type="text" name="message">
                        <button type="submit">Kaydet</button>
                    </form>
                </body>
            </html>`);
        return res.end();
    }

    if (url === '/log' && method === 'POST'){
        fs.appendFileSync('text1.txt', 'post created: test message');
        // yönlendirme (route)
        res.statusCode = 302;
        res.setHeader('Location', '/');     
        return res.end();   
    }
});

server.listen(8080);
console.log("listening on port 8080");