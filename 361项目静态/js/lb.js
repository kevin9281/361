var imgs=slider.children;
for(var img of imgs){
			img.onclick=function(){
				//this->当前img
				var img=this;
				alert(img.alt);
			}//img.onclick() //this->.前的当前img对象
		}//img->最后一个img
		function task(){
			var img=//查找现在class为show的img
				slider.getElementsByClassName("show")[0];
			img.className="";//清空img的class
			//如果img有下一个兄弟
			if(img.nextElementSibling)
				//设置img的下一个兄弟的class为show
				img.nextElementSibling.className="show";
			else//否则
				//设置img的父元素的第一个孩子的className为show
				img.parentNode.children[0].className="show";
		}
		var timer=setInterval(task,3000);
				 //当鼠标进入
		slider.onmouseover=function(){
			clearInterval(timer)
		}
		slider.onmouseout=function(){
			timer=setInterval(task,2000);
		}