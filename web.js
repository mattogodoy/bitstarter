var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var index = fs.readFileSync('index.html');
var buf = new Buffer(index, "utf-8");
var respuesta = buf.toString();

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(respuesta);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
