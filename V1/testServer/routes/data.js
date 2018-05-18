var express = require('express');
var router = express.Router();
var addChir=require('../model/chair');
// get data from device
router.get('/:id/:status', function(req, res, next) {
    //res.send('hi supun'+req.params.name);
    var add=new addChir(
        {
            status:req.params.status,
            chair_id:req.params.id
        }
    );
    addChir.findOne({ chair_id: req.params.id }, function (err, doc){
        if(err){console.log('B');
            add.save(function (err) {
                console.log('A');
                if(err){res.send(err);}
                else{
                    res.send('create cellection'+req.params.id);
                }
            });
        }else{console.log('C');
            doc.status = req.params.status;
            doc.save();
            res.send('ok save data'+req.params.status);
        }

    });
    /*add.save(function (err) {
        if(err){res.send(err);}
        else{
            res.send('ok save data'+req.params.id);
        }
    });*/

});

module.exports = router;
