var mongoose=require('mongoose');
//定义用户表结构
module.exports=new mongoose.Schema({
    //yanfa title
    title:String,
    model:String,
    brand:String,
    place:String,
    hangye:String,
    standard:String,
    number:String,
    desc:String,
    environment: {
        type: Array,
        default: []
    },
    //pic url
    url:String
})