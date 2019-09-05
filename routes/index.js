var express = require('express');
var router = express.Router();

var connection = require('../config/connection');


/* GET home page. */
router.get('/', function(req, res, next) {

  connection.query('SELECT * FROM users', function(err,rows){

    if(err) throw err;

    

    res.render('index', {users:rows });

  });
   
 
});
router.post('/addUser',function(req,res){

  const userdata = {
    fname:req.body.fname,
    laname:req.body.laname,
    email:req.body.email,
    prof:req.body.prof  

  };
  connection.query("INSERT INTO users SET ?", userdata,function (err,result) {

    if(err) throw err;
    res.redirect('/');

  });

 
});

router.get('/deteleUser/:id',function(req,res){

  var userid = req.params.id;

  
});

module.exports = router;
