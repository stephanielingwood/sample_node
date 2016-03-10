var express = require("express"),
    nano = require('nano')('http://localhost:5984'),
    app = express(),
    testFile = require('./lib/testFile.js');

app.get("/", function (req, res) {
  res.send("Hey buddy!");
});

app.get('/testFile', function (req, res) {
  res.send(testFile.string);
});

app.get('/testFileComponent', function (req, res) {
  res.send(testFile.stringToo);
});

app.listen(3000, function () {
  console.log('Express listening on port 3000');
});
