var express = require('express');
var router = express.Router();
var Banner = require('../models/banner');
var Roms = require('../models/roms');
var Chanpin = require('../models/chanpin');
var responseData;
router.use(function (req, res, next) {
  if (!req.cookies.get('userInfo')) {
    try {
      return res.send('对不起，只有管理员才能访问网站后台')
    } catch (e) {
    }
  };
  responseData = {
    message: ''
  };
  next();
})
router.get('/', function (req, res, next) {
  res.render('houtai');
})
router.get('/bannerhoutai', function (req, res, next) {
  Banner.find().then(function (banners) {
    res.render('bannerhoutai', { banners: banners });
  })
})
router.get('/chanpinhoutai', function (req, res, next) {
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
  Chanpin.find().then(function (chanpin) {
    res.render('chanpinhoutai', { chanpin: chanpin });
  })
})
router.get('/romshoutai', function (req, res, next) {
  Roms.find().then(function (roms) {
    res.render('romshoutai', { roms: roms });
  })
})
router.post('/loginout', function (req, res, next) {
  req.cookies.set('userInfo', null);
  res.send("sucess")
})
router.get('/jiancehoutai', function (req, res, next) {
  res.render('jiancehoutai');
})
router.get('/yanfahoutai', function (req, res, next) {
  res.render('yanfahoutai');
})
router.get('/abouthoutai', function (req, res, next) {
  res.render('abouthoutai');
})
router.get('/banneredit', function (req, res, next) {
  var id = req.query.id || '';
  Banner.findOne({
    _id: id
  }).then(function (bannerInfo) {
    if (!bannerInfo) {
      return res.send('banner信息不存在');
    } else {
      res.render('banneredit', {
        bannerInfo: bannerInfo
      });
    };
  })
});
router.post('/banneredit', function (req, res, next) {
  var title = req.body.title || '';
  var url = req.body.url || '';
  var id = req.query.id || '';
  Banner.findOne({
    _id: '58e5e51d36a06159e59835a4'
  }).then(function (bannerInfo) {
    if (!bannerInfo) {
      return res.send('banner信息不存在');
    } else {
      if (title == bannerInfo.title && url == bannerInfo.url) {
        return res.send('保存成功');
      }else{
        return res.send('保存成功2');
      }
    };
  })
})
module.exports = router;