var http = require('http'); // HTTP module
var url = require('url'); // url module
var fs = require('fs'); // file system module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Written by SmartKid");
    res.end()
}).listen(8080);
