//导入第三方模块express
const express = require ("express");
const pool = require("./pool");
//导入第三方模块express下bodyParse功能模块
const bodyParser = require ("body-parser");
//引入路由模块
const userRouter = require ("./routes/user");
const index = require ("./routes/index.router");
const detail = require("./routes/detail.router");
//引入session模块
const session=require("express-session")

//使用express模块创建web服务器
var app = express ();
//监听端口
app.listen (8080,function (){
    console.log ("服务器创建成功")
});

app.use(session({
    secret:"128位随机字符",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    }
}));

//使用body-parser中间件 body-parser 针对post请求处理请求参数 json是否是自动转换 不转换
app.use (bodyParser.urlencoded ({
    extended:false
}));
//创建静态文件托管
app.use (express.static("public"));
//挂载用户路由器到user路径下
app.use ("/user",userRouter);
//挂载首页路由到user路径下
app.use ("/index",index);
//测试: http://localhost:3000/detail?lid=9
app.use("/details",detail);

