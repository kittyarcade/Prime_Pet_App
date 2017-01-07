var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRouter = require('./router/pets');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use( express.static( "public" ));
app.use('/router', userRouter);

var mongoURI = "mongodb://localhost:27017/petDB";
var MongoDB = mongoose.connect(mongoURI).connection;

app.listen('3000', function(){
  console.log('listening on 3000');
});
