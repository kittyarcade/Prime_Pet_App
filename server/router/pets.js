var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/newPet');

router.post('/', function(req, res){
  var info = req.body;
  console.log('Post route hit:', req.body);
  var postPet = new User ({
    Name: info.Name,
    Animal: info.Animal,
    Age: info.Age,
    Image: info.Image
  });
  postPet.save(function(err){
    if(err){
      console.log('POST: ', 500);
    } else {
      console.log('POST: ', 200);
      res.send('pet added');
    }
  });
});

router.get('/', function(req, res){
  console.log('GET route hit');
  User.find({}, function(err, result){
    if(err){
      console.log('GET Broke');
      res.sendStatus(500);
    } else {
      console.log('GET Sent');
      res.send(result);
    }
  });
});//end get

module.exports = router;
