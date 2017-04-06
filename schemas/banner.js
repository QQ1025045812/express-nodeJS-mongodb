var mongoose=require('mongoose');
//定义用户表结构
module.exports=new mongoose.Schema({
    //banner title
    title:String,
    //banner url
    url:String
})