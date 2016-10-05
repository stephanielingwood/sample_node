var express = require("express"),
    nano = require('nano')('http://localhost:5984'),
    app = express();

// memcached
var memjs = require('memjs');

app.get("/", function (req, res) {
  res.send("Hey buddy!");
});

// memcached setup
var memClient = memjs.Client.create('127.0.0.1:11211', {
  username: 'username',
  password: 'password'
});

module.exports.memClient = memClient;

app.listen(3000, function () {
  console.log('Express listening on port 3000');
});
