(()=>{
window.onload=function(){
	var objDemo = document.getElementById("demo"); 
	/* 找到objDemo最外层div 为 id #demo 名字为 objDemo最外层div*/
  var objSmallBox = document.getElementById("small-box");
  /* 找到objSmallBox最外层里面第一层div 为 id #small-box  名字为 objSmallBox最外层里面第一层*/
  var objMark = document.getElementById("mark");
  /* 找到objMark第一个遮罩层最大的 为 id #mark 名字为 objMark遮罩层最大的*/
  var objFloatBox = document.getElementById("float-box");
  /* 找到可移动遮罩层 定义id为  #objFloatBox*/
  var objBigBox = document.getElementById("big-box");
  /* 找到放大图的外层div 定义id  #objBigBox*/
  var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];
  /* 找到右侧放大的图片 定义id objBigBoxImage */
  objMark.onmouseover = function() { //固定遮罩层绑定指针鼠标移入事件
		objFloatBox.style.display = "block"  //当鼠标移入 遮罩层样式 改为显示
		objBigBox.style.display = "block"    //鼠标移入 放大图片样式 显示
  }
  objMark.onmouseout = function() {   //固定遮罩层绑定鼠标移出事件
		objFloatBox.style.display = "none"  //当鼠标移出 遮罩层样式 隐藏
		objBigBox.style.display = "none"    //当鼠标移除 放大图片样式 隐藏
  }
  objMark.onmousemove = function(ev) { //鼠标滑过的时候，对相关的放大的倍数进行计算后对图片进行输出
    var _event=ev||window.event; //兼容多个浏览器的event参数模式
    var left=_event.clientX-objDemo.offsetLeft-objSmallBox.offsetLeft-objFloatBox.offsetWidth/2;
    //clientX 160+50 
    //left = 210-0-0-332/2= 44
   /*  console.log(left); */
    //声明左边等于 是鼠标相对于浏览器窗口可视区域的X的距离减去 鼠标到最外层的div的左边距离 
    //再减去 鼠标到最外层里面第一层div的左边距离 再减去鼠标到可移动遮罩层的可见宽度除以二
    var top=_event.clientY-objDemo.offsetTop-objSmallBox.offsetTop-objFloatBox.offsetHeight/2;
    //top = 192-648-648-332/2= -1270
    /* console.log(top); */
    //声明上等于 鼠标相对于浏览器窗口可视区域的Y的距离 减去 鼠标到最外层上面的距离 
    //再减去 鼠标到最外层里面第一次div的上距离 再减去可移动遮罩层的可见宽度除以二
    //设置边界处理，防止移出小图片
    //这里的clientX是指鼠标在浏览器中的绝对坐标位置，也就是计算网页中图片的位置。然后进行绝对化的图片显示的过程
     /**
         * 此段代码是为了对放大镜区域移出mark标记块的时候的处理。
         * 实现的功能是：放大镜区域只会存在与mark的标记块内部
         */
    if(left<0) {  //如果左小于0
      left=0;  //左就等于0
    }else if(left>(objMark.offsetWidth-objFloatBox.offsetWidth)){left=objMark.offsetWidth-objFloatBox.offsetWidth;}
    //否则如果 左边左大于第一个遮罩层的可见宽度 减去 移动遮罩层的可见宽度
    //那么     左就等于 第一个遮罩层的可见宽度 减去 移动遮罩层的可见宽度
    if(top<0){ //如果上小于0
      top=0;}//上就等于0
      else if(top>(objMark.offsetHeight-objFloatBox.offsetHeight)){top=objMark.offsetHeight-objFloatBox.offsetHeight;}
    //否则如果 上大于 第一个遮罩层的可见高度 减去 移动遮罩层的 可见高度
    //那么     上等于 第一个遮罩层的可见高度 减去 移动遮罩层的 可见高度
      //设置放大镜出现的位置
    objFloatBox.style.left=left+"px"; //oSmall.offsetLeft的值是相对什么而言
    /* console.log(objFloatBox.style.left); */
    //移动遮罩层的样式左等于 左 +"px"
    objFloatBox.style.top=top+"px";
    /* console.log(objFloatBox.style.top); */
    //移动遮罩层的样式上等于 上+"px"
    //求其比值
    var percentX=left/(objMark.offsetWidth-objFloatBox.offsetWidth);
    /* console.log(percentX); */
    //X 等于 左 除 第一个遮罩层的可视宽度 减去移动遮罩层的可视宽度
    var percentY=top/(objMark.offsetHeight-objFloatBox.offsetHeight);
    //Y 等于 上 除 第一个遮罩层的可视高度 减去移动遮罩层的可视高度
    /* console.log(percentY); */
    //方向相反，小图片鼠标移动方向与大图片相反，故而是负值
    objBigBoxImage.style.left= -percentX*(objBigBoxImage.offsetWidth-objBigBox.offsetWidth)+"px";
    /* console.log(objBigBoxImage.style.left); */
    //放大的图片的样式的 左 等于 (X*放大图片的可视宽度 减去 放大图片外面的div的可视宽度 )px;
    objBigBoxImage.style.top= -percentY*(objBigBoxImage.offsetHeight-objBigBox.offsetHeight)+"px";
    /* console.log(objBigBoxImage.style.top); */
    //放大的图片的样式的 上 等于 (Y*放大图片的可视高度 减去 放大图片外面的div的可视高度)px;
       /**
         * 这里有亮点需要进行注意：
         * 1.注意负号，因为大图的显示的方向与放大镜的移动方向是相反的
         * 2.注意相乘的比例值的计算
         */
  }
}
})();

