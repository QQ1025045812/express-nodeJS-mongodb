var mongoose=require('mongoose');
var chanpinSchema=require('../schemas/chanpin');
module.exports=mongoose.model('Chanpin',chanpinSchema);