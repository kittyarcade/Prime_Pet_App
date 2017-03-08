var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRouter = require('./router/pets');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use( express.static( "public" ));
app.use('/router', userRouter);

//database connection
var mongoURI = "mongodb://heroku_w5ngnvkd:udo39lpfmm5ddfv8moefvvipkg@ds157529.mlab.com:57529/heroku_w5ngnvkd";
// "mongodb://localhost:27017/petDB";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

//server
app.listen('3000', function(){
  console.log('listening on 3000');
});
