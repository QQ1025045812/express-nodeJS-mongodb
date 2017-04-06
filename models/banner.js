var mongoose=require('mongoose');
var bannerSchema=require('../schemas/banner');
module.exports=mongoose.model('Banner',bannerSchema);