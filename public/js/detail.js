(()=>{
	"use strict";
	$(function () { //dom事件加载执行后就执行这个
		//获得地址栏中的search部分
		//将search按=切割,取第2部分
	//地址栏 ：file:///F:/WEB1808%E7%8F%AD/%E5%86%99xz%E9%A1%B9%E7%9B%AE/public/product_details.html?lid=2  search等于?后的部分
	var search = location.search;  //声明一个search变量赋值 js通过location.search来获取页面传来的参数
	if(search !==""){						//如果search不等于空字符串
		var lid =search.split("=")[1]; //声明lid等于search传来参数里面的split切割等号后面的1位
	//	console.log(lid); //打桩
		$.ajax({
			url:"http://localhost:3000/details",
			type:"get",
			data:{lid},
			dataType:"json",
			success:function (output) { //请求处理成功进入success里面处理函数
	//			console.log(output);   //打桩
	//从output大对象中解构出三个小部分分别使用
	var {product,specs,pics}=output; //声明产品 规格 图片赋值到output传参
			}}
		)}
	});

//多方向看详图 start
$(".my-small").hover( function (){  //1.查找触发事件的元素
	var $img=$(this);  //2.绑定事件处理函数
	var src=$img.attr("data-big");  //3.查找要修改的元素
$(".my-big").attr({src});  //4.修改元素
$(".my-big1").attr({src});
});
//多方向看详图 end


//选颜色 换颜色分类  start
$(document).on("click", "ul.product-color-choice li",
function() {
	$(this).addClass("select").siblings().removeClass("select");
	var nowColor = $(this).attr("data-color");
	$("p.product-color span").html(nowColor);
	return true;
});
//选颜色 换颜色分类  end

//根据颜色换尺码换左边小图 start

//根据颜色换尺码换左边小图 end


//点击选择尺码+的下拉列表 start
$(".product-size-choice").hide();
var $btn=$("#dropdown");
$btn.click(function () {
	var $btn=$(this);
	$btn.parent().children(":last-child").toggle();
	$(this).html('尺码选择 -'); 
	return true;
	}) 

//点击选择尺码的下拉列表 ende


//数量 + - start
var btn = $(".btnAdd");
btn.click(function () {
	btn = $(this);
  var input = btn.parent().children("input");
	var n =Number(input.val());
	if (btn.html() == "+"){
		n++;
		input.val(n);
	}else{
		if(n>1){n--;}	
		input.val(n);
	}
}); 
//数量 + - end
//number add or less
/* $(document).on("click", "div.product-size button#changenumber",
function() {
  $('div.product-buy').prev('.prompt').remove();
  var obj = $(this),
  type = obj.attr("data-type"),
  num = obj.siblings("input[name=number]").val(),
  mnum = $(".product-size .size").attr("data-count"),
  size = $(".product-size .size").attr("data-size");
  if (!size) {
    $("div.product-buy").before("<p class='prompt' style='width:270px; margin:10px auto 20px !important;'>请选择商品尺码</p>");
    setTimeout("$('div.product-buy').prev('.prompt').remove()", 2000);
    return true;
  }
  if (type == 'less') num--;
  else num++;
  if (type == 'less' && num <= 0) {
    return false;
  }
  if (type == 'add' && num > mnum) {
    $("div.product-buy").before("<p class='prompt' style='width:270px; margin:10px auto 20px !important;'>宝贝库存不足</p>");
    setTimeout("$('div.product-buy').prev('.prompt').remove()", 2000);
    return false;
  }
  obj.siblings("input[name=number]").val(num);
  return true;
}); */
//数量 + - end


//加入购物车 start
//加入购物车 end
//立即购买 start
//立即购买 end
//收藏 start
//收藏 end
//分享 start
//分享 end



//	详情评论说明 多标签页面 start
	var a=document.getElementById("content1").style.display = "block"; 
	console.log(a);
//1.查找触发事件的元素
//查找data-toggle属性为tab的所有元素
var tabs = document.querySelectorAll ("[data-toggle=tab]");
tabs[0].className = "select";
//2.绑定事件函数
for (var tab of tabs) { //遍历每个标签
//为当前tab绑定单击事件
tab.onclick = function () {
	for (var tab of tabs) {
	tab.className = "";
}
var tab = this;
tab.className = "select";
	//3.查找要修改的元素
	var divs = document.querySelectorAll ("#container>div");
	for (var div of divs) {
		div.style.display = "none";  //4.修改元素
	}
	//查找id为container下的所有div //清除当前div的zIndex属性
	//获得当前tab对应的div的id
	var id = tab.getAttribute ("data-target");
	//再找到当前tab对应的div
	var div = document.querySelector (id);
	div.style.display = "block";
 }
};
//	详情评论说明 多标签页面 end

})();
