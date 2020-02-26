const http = require('http');
const info = require('./node1')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/os-info') {
        res.write(JSON.stringify(info));
    res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');