//引入第三方模块express
const express = require ("express");
//引入连接池
const pool = require ("../pool.js");
//使用express模块创建空路由对象
var router = express.Router ();

//创建检查用户名是否存在路由接口
router.get("/checkUname",(req,res)=>{
    var $uname=req.query.uname;
    var sql="SELECT * FROM yjs_user WHERE uname=?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            res.send({ok:1});
        }else{
            res.send({ok:0});
        }
    });
});

//创建用户注册路由接口
router.post("/register",(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    var sql="INSERT INTO yjs_user VALUES(NULL,?,?,NULL)";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({ok:1})
        }else{
            res.send({ok:0})
  };
 });
});

//创建用户登录路由接口 express框架中用req.body接收post客户端的数据.name
router.post("/login",(req,res)=>{
    var $uname =req.body.uname;
    var $upwd =req.body.upwd;
    var sql ="SELECT * FROM yjs_user WHERE uname=? and upwd=?"
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({ok:1});
        }else{
            res.send({ok:0});
        }
    })
})

//导出路由器 拿到路由器对象
module.exports=router;