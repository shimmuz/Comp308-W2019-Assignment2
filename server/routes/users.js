/* 
FIle name: users.js  
Name : Shefali Sharma
Id:  300973745
Date :Feb 16, 2019*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
