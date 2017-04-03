/**
 * 应用程序的启动入口文件
 * 发送路径请求首先进入该文件
 * 
*/
//加载express模块
var express=require('express');
//加载模板
var swig=require('swig');
var mongoose=require('mongoose');
//创建app应用
var app=express();
//设置静态文件托管
app.use('/public',express.static(__dirname+'/public'));
//配置模板应用
//第一个参数，定义当前模板所使用的模板引擎，模板引擎的名称，同时也是模板文件的后缀,第二个函数表示解析模板内容的方法
app.engine('html',swig.renderFile);
//设置模板文件的存放目录,第一个参数必须是views，第二个是路径
app.set('views','./views');
//注册所使用的模板引擎，第一个参数必须是view engine；第二个参数和app.engine这个方法中定义的第一个函数也就是模板引擎名字一致
app.set('view engine','html');

//取消模板缓存
swig.setDefaults({cache:false});
/**
 * 
 * 首页
 * req request对象
 * res response对象
 * next
*/
// app.get('/',function(req,res,next){
//     // res.send('<h1>hahha</h1>')
//     //读取views目录下的指定文件，解析并返回给客户端,第一个参数表示模板文件，相对于views目录,第二个参数，传递给模板使用的数据
//     res.render('index');
// })
//根据不同的功能划分模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));
mongoose.connect('mongodb://localhost:27018/guanwang',function(err){
    if(err){
        console.log("数据库连接失败！！！")
        return;
    }
    console.log("数据库链接成功！");
    //监听http请求
    app.listen(8081);
});