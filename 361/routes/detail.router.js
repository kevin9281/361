const express=require("express");
const router=express.Router();
const pool=require("../pool");
//使用express模块创建空路由

//创建详情页产品接口
router.get("/detail",(req,res)=>{
	var pid = req.query.pid;
	var uid = req.session.id;

	var output={
		img:{},
		id:""
	};
	output.id=uid;
	//查询详情
	var sql="SELECT sm,mg,mg2,mg3,mg4,lg,lg2,lg3,lg4 FROM yjs_detail_pic WHERE pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		output.img=result[0];
		 res.send(output);
		//  console.log(output);
	})
});

//创建商城商品接口
router.get("/product",(req,res)=>{
	var sql = "SELECT * FROM yjs_commodit";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
});
//验证 http://127.0.0.1:8080/detail/product

//导出路由器
module.exports=router;