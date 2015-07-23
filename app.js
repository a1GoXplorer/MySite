var express = require('express');
var mongodb = require('mongodb');
var request = require('request');
var path = require('path');
var db = require('./models');

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/data/db", function(err, db) {
  if(!err) {
    console.log("**CONNECTED TO MONGO!!**");
  }
});

var app = express();

app.get('/', function (req, res) {
  res.send('Fuck You, World.');
});

//server stuffs
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

