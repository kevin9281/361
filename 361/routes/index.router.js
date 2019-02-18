//引入第三方模块express
const express = require ("express");
//引入连接池
const pool = require ("../pool");
//使用express模块创建空路由对象
var router = express.Router ();


router.get("/",(req,res)=>{
  var sql=`select * from xz_index_product where seq_recommended!=0 order by seq_recommended `;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})

module.exports=router;