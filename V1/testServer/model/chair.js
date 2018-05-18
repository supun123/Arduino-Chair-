var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    status : {type:String},
    chair_id : {type:String}
});

module.exports = mongoose.model('chair', schema);