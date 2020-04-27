const http = require('http');
const port = 3000;
const hostName = 'localhost';

http.createServer(function (request, response) {
    if (request.url === '/OK') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(200);
        response.write("<html>", { "Content-Type": "text/html" });
        response.write("<body>");
        response.write("<h1>Hello, World!</h1>");
        response.write("</body>");
        response.write("</html>");
        response.end();
    }
    else if (request.url === '/Bad-Request') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(400);
        response.end();
    }
    else if (request.url === '/Created') {
        console.log(`Inbound ${request.url} request being processed...`);
        if (request.method === 'POST') {
            response.writeHead(201);
        }
        else {
            response.writeHead(405,
                {
                    'Location': 'http://localhost:3000/MethodNotAllowed'
                });
        }
        response.end();
    }
    else if (request.url === '/MethodNotAllowed') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(405);
        response.end();
    }
    else if (request.url === '/Forbidden') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(403);
        response.end();
    }
    else if (request.url === '/Found') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(302,
            {
                'Location': 'http://localhost:3000/OK'
            });
        response.end();
    }
    else if (request.url === '/Gateway-Timeout') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(504);
        response.end();
    }
    else if (request.url === '/Internal-Server-Error') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(500);
        response.end();
    }
    else if (request.url === '/Moved-Permanently') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(301,
            {
                'Location': 'http://localhost:3000/OK'
            });
        response.end();
    }
    else if (request.url === '/Unauthorized') {
        console.log(`Inbound ${request.url} request being processed...`);
        response.writeHead(401);
        response.end();
    }
    else {
        console.log(`Inbound ${request.url} request being processed...`);
        response.end();
    }
}).listen(port, hostName, function () {
    console.log(`Server is running at http://${hostName}:${port}/`);
});
