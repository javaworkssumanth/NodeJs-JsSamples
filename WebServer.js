/**
 * 
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const util = require('util');

const server = http.createServer((req, res) => {
	console.log("request"+util.inspect(req,{ compact:true}))
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Sumanth!\n');
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
