var express = require('express');
const Admin = require('../models').admin;
const User = require('../models').User;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mahmoud',});
});

router.post('/', function(req, res, next) {
  let name = req.body.name;
  
  User.create({
    firstName: name,
  }).then((User)=>{
    res.render('hi', { name });
  }).catch(console.error);
  
});


module.exports = router;
