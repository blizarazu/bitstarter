var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    if(err) throw err;
    buff = new Buffer(data, "utf-8");
    response.send(buff.toString());
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
