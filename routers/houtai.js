var express=require('express');
var router=express.Router();
var Banner=require('../models/banner');
var Roms=require('../models/roms');
router.get('/',function(req,res,next){
  if(!req.cookies.get('userInfo')){
        try{
          return res.send('对不起，只有管理员才能访问网站后台')
        }catch(e){

        }
    };
  res.render('houtai');
});
router.get('/bannerhoutai',function(req,res,next){
  // var title="001";
  // var url="/public/images/banner4.jpg"
  // var banner=new Banner({
  //       title:title,
  //       url:url
  //   });
  // banner.save();
  Banner.find().then(function(banners){
    res.render('bannerhoutai',{banners:banners});
  })
})
router.get('/chanpinhoutai',function(req,res,next){
  res.render('chanpinhoutai');
})
router.get('/romshoutai',function(req,res,next){
  //   var title="智能辐射监测及OA管理系统软件";
  // var url="/public/images/pro03.png";
  // var subtitle="ROMS100/ROMS200系列";
  //   var desc=["利用物联网和“互联网+”环境监管的理念，设计的一整套“监测任务派发”、“现场智能监测”、“质控多级审核”、“原始记录一键生成报告”、“大数据管理”等功能为一体的智能辐射监测OA软件系统。","包括私有云服务器端、WEB端、APP监测和短信电话推送后台"];
  // var roms=new Roms({
  //       title:title,
  //       url:url,
  //       subtitle:subtitle,
  //       desc:desc
  //   });
  // roms.save();
  Roms.find().then(function(roms){
    res.render('romshoutai',{roms:roms});
  })
})
router.get('/jiancehoutai',function(req,res,next){
  res.render('jiancehoutai');
})
router.get('/yanfahoutai',function(req,res,next){
  res.render('yanfahoutai');
})
router.get('/abouthoutai',function(req,res,next){
  res.render('abouthoutai');
})
module.exports=router;