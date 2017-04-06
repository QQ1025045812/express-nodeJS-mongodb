var mongoose=require('mongoose');
var romsSchema=require('../schemas/roms');
module.exports=mongoose.model('Roms',romsSchema);