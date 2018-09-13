let http = require('https');
console.log('request was made: ' + req.url);
let server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'test/plain'});
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');