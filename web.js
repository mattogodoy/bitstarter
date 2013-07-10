var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var index = fs.readFileSync('index.html');
var buf = new Buffer(index, "utf-8");
//console.log(index);

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
