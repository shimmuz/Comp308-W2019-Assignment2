/* 
FIle name: index.js  
Name : Shefali Sharma
Id:  300973745
Date :Feb 16, 2019*/

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/projects', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

module.exports = router;
