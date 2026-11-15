const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    let filePath = path.join(
        __dirname,
        req.url === '/' ? 'index.html' : req.url
    );

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
            return;
        }

        const ext = path.extname(filePath);

        const contentTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css'
        };

        res.writeHead(200, {
            'Content-Type': contentTypes[ext] || 'application/octet-stream'
        });

        res.end(content);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});