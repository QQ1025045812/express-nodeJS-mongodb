var mongoose=require('mongoose');
//定义用户表结构
module.exports=new mongoose.Schema({
    //roms title
    title:String,
    subtitle:String,
    desc: {
        type: Array,
        default: []
    },
    //pic url
    url:String
})