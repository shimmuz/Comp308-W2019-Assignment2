/* 
FIle name: index.js  
Name : Shefali Sharma
Id:  300973745
Date :Feb 16, 2019*/

let express = require("express");
let router = express.Router();
let indexController = require("../controllers/index");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });
// router.get('/aboutme', function(req, res, next) {
//   res.render('aboutme', { title: 'About Me' });
// });

// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact' });
// });

// router.get('/projects', function(req, res, next) {
//   res.render('project', { title: 'Projects' });
// });

// router.get('/services', function(req, res, next) {
//   res.render('service', { title: 'Services' });
// });
// POST  - processes the login page
router.post("/login", indexController.processLoginPage);

// POST - processes the user registration page
router.post("/register", indexController.processRegisterPage);

// GET - perform user logout
router.get("/logout", indexController.performLogout);

module.exports = router;
