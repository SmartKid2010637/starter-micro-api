//npm install @cyclic.sh/s3fs
var http = require('http');
var url = require('url');
var fs = requre('fs');
const fs2 = require('@cyclic.sh/s3fs')(cyclic-dull-cyan-dibbler-shoe-ap-southeast-2);

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var target = "." + q.pathname;
	var filename = target;
	if (target == "./") {
		filename = "index.html";
	}
	console.log(q.pathname);
  	fs.readFile(filename, function(err, data) {
	if (err) {
    	res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
