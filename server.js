const http = require('http');
const port = 3000;
const hostName = 'localhost';

http.createServer(function (request, response) {
    if (request.url === '/OK') {
        console.log('Inbound /OK request being processed...');
        response.writeHead(200);
        response.end();
    }
    else if (request.url === '/Bad-Request') {
        console.log('');
        response.writeHead(400);
        response.end();
    }
    else if (request.url === '/Created') {
        console.log('');
        response.writeHead(201);
        response.end();
    }
    else if (request.url === '/Forbidden') {
        console.log('');
        response.writeHead(403);
        response.end();
    }
    else if (request.url === '/Found') {
        console.log('');
        response.writeHead(302);
        response.end();
    }
    else if (request.url === '/Gateway-Timeout') {
        console.log('');
        response.writeHead(504);
        response.end();
    }
    else if (request.url === '/Internal-Server-Error') {
        console.log('');
        response.writeHead(500);
        response.end();
    }
    else if (request.url === '/Moved-Permanently') {
        console.log('');
        response.writeHead(301);
        response.end();
    }
    else if (request.url === '/Unauthorized') {
        console.log('Inbound /Unauthorized request being processed...');
        response.writeHead(401);
        response.end();
    }
    else {
        console.log('404 Not Found');
        response.writeHead(404);
        response.end();
    }
}).listen(port, hostName, function () {
    console.log(`Server is running at http://${hostName}:${port}/`);
});
