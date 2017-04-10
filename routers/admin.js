var express=require('express');
var router=express.Router();
var User = require('../models/user');
var responseData;
router.use(function (req, res, next) {
  responseData = {
    code: 0,
    message: ''
  };
  next();
})
router.post('/login', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  // // var user=new User({
  // //     username:username,
  // //     password:password
  // // });
  // // console.log(user)
  // return user.save();
  if (username == '' || password == '') {
    responseData.code = 1;
    responseData.message = '用户名或密码不能为空';
    return res.json(responseData);
  }
  User.findOne({
    username: username,
    password: password
  }).then(function (userInfo) {
    if (!userInfo) {
      responseData.code = 2;
      responseData.message = '用户名或密码错误';
      return res.json(responseData);
    } else {
      responseData.message = '登陆成功';
      responseData.userInfo = {
        _id: userInfo.id,
        username: userInfo.username
      };
      req.cookies.set('userInfo', JSON.stringify({
        _id: userInfo.id,
        username: userInfo.username
      }));
      res.json(responseData);
    }
  })
});
router.get('/',function(req,res,next){
    res.render('admin')
});
module.exports=router;