'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var gcm = require('node-gcm');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Local Server : http://localhost:3000');
});
