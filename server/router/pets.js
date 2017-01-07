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


module.exports = router;
