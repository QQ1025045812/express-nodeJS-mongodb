var express=require('express');
var router=express.Router();
var Banner=require('../models/banner');
var Roms=require('../models/roms');
var Chanpin=require('../models/chanpin');
var User=require('../models/user');
var responseData;
router.use(function(req,res,next){
    responseData={
        code:0,
        message:''
    };
    next();
})
router.post('/login',function(req,res,next){
    var username=req.body.username;
    var password=req.body.password;
    // // var user=new User({
    // //     username:username,
    // //     password:password
    // // });
    // // console.log(user)
    // return user.save();
    if(username==''||password==''){
        responseData.code=1;
        responseData.message='用户名或密码不能为空';
        return res.json(responseData);
    }
    User.findOne({
        username:username,
        password:password
    }).then(function(userInfo){
        if(!userInfo){
            responseData.code=2;
            responseData.message='用户名或密码错误';
            return res.json(responseData);
        }else{
            responseData.message='登陆成功';
            responseData.userInfo={
                _id:userInfo.id,
                username:userInfo.username
            };
            req.cookies.set('userInfo',JSON.stringify({
                _id:userInfo.id,
                username:userInfo.username
            }));
            res.json(responseData);
        }
    })
});
router.use(function(req,res,next){
  if(!req.cookies.get('userInfo')){
        try{
          return res.send('对不起，只有管理员才能访问网站后台')
        }catch(e){

        }
    };
 next();
});
router.get('/',function(req,res,next){
  res.render('houtai');
})
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
   // var title="001";
  // var url="/public/images/banner4.jpg"
  // var banner=new Banner({
  //       title:title,
  //       url:url
  //   });
  // banner.save();
  //   var title="String",
  //   model="String",
  //   brand="String",
  //   place="String",
  //   hangye="String",
  //   standard="String",
  //   number="String",
  //   desc="String",
  //   environment= [],
  //   url="String";
  // var chanpin=new Chanpin({
  //   title:"String",
  //   model:"String",
  //   brand:"String",
  //   place:"String",
  //   hangye:"String",
  //   standard:"String",
  //   number:"String",
  //   desc:"String",
  //   environment: [],
  //   url:"String",
    
  // });
  //  chanpin.save();
  Chanpin.find().then(function(chanpin){
    res.render('chanpinhoutai',{chanpin:chanpin});
  })
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
router.post('/loginout',function(req,res,next){
  req.cookies.set('userInfo',null);
  console.log(111)
  console.log(req.cookies.get('userInfo'))
  console.log(111)
   res.send("sucess")
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
router.get('/banneredit',function(req,res,next){
  res.render('banneredit');
})
module.exports=router;