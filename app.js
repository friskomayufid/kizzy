const http = require('http');

http.createServer(function (req,res) {

	res.write("On the way fullstack bos!");
	res.end();

}).listen(3000);

console.log("Server start on port 3000");
