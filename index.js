// Load the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;               // Set status code to 200 OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');         // Send response
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
