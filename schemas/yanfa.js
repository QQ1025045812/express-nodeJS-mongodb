var mongoose=require('mongoose');
//定义用户表结构
module.exports=new mongoose.Schema({
    //yanfa title
    head:String,
    title:String,
    subtitle:String,
    desc: {
        type: Array,
        default: []
    },
    //pic url
    url:String
})