var http = require('http');
var url = require('url');
var crypto = require("crypto");
var port = process.env.PORT || 8081;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
    var queryData = url.parse(request.url, true).query;
    var requestId = crypto.randomBytes(16).toString("hex");

	response.end('This process is your pid: ' + process.pid + '.\n\nRequest Id: '+requestId);
     
}).listen(port);

// Console will print the message
console.log("Server running at http://localhost:%d", port);
