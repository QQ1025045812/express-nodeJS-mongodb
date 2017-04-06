var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
  if(!req.cookies.get('userInfo')){
        try{
          return res.send('对不起，只有管理员才能访问网站后台')
        }catch(e){

        }
    };
  res.render('houtai');
});
router.get('/chanpinhoutai',function(req,res,next){
  res.render('chanpinhoutai');
})
router.get('/romshoutai',function(req,res,next){
  res.render('romshoutai');
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