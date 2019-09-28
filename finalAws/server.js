var express = require('express');
var app = express();

var server = require('http').Server(app);


const port = process.env.PORT || 8080;

  server.listen(port, ()=>{
    console.log('listening for requests on port + dev,',port);
  });

// App setup

var bodyParser = require('body-parser');
var fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));






