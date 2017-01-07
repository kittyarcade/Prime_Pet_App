var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRouter = require('./router/pets');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use( express.static( "public" ));
app.use('/router', userRouter);

app.listen('3000', function(){
  console.log('listening on 3000');
});
