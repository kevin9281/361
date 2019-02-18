//导入第三方模块express
const express = require ("express");
//导入第三方模块express下bodyParse功能模块
const bodyParser = require ("body-parser");
//引入路由模块
const userRouter = require ("./routes/user");
const index = require ("./routes/index.router");
const details = require("./routes/details.router");

//使用express模块创建web服务器
var app = express ();

//监听端口
app.listen (8080,function (){
    console.log ("服务器创建成功")
});

//使用body-parser中间件
app.use (bodyParser.urlencoded ({
    extended:false
}));

//创建静态文件托管
app.use (express.static("public"));

//挂载用户路由器到user路径下
app.use ("/user",userRouter);
//挂载首页路由到user路径下
app.use ("/index",index);
//测试: http://localhost:3000/details?lid=9
app.use("/details",details);