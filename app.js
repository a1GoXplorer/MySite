var express = require('express');
var mongodb = require('mongodb');
var request = require('request');
var ejs = require('ejs');
var mongoose = require('mongoose');
var viewEngine = require('view-engine');

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/data/db", function(err, db) {
  if(!err) {
    console.log("**DATABASE WORKING**");
  }
});

var app = express();

app.set('view engine', 'ejs');

app.use("/styles",express.static(__dirname + "/styles"));
app.use("/scripts",express.static(__dirname + "/scripts"));

app.get('/', function (req, res) {
  res.render('bullshit.ejs');
});

//server stuffs
var server = app.listen(3000, function() {
console.log("**SERVER ONLINE**");
});

