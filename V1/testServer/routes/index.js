var express = require('express');
var router = express.Router();
var addChir=require('../model/chair');
/* GET home page. */
router.get('/', function(req, res, next) {
    var add=new addChir(
        {
            status:'on',
            chair_id:'2D'
        }
    );
    add.save(function (err) {
        if(err){res.send(err);}
        else{
            res.render('index', { title: 'Express' });
        }
    });

});

module.exports = router;
