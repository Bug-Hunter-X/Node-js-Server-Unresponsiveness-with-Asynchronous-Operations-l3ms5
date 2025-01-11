const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request asynchronously
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a 5-second delay
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});