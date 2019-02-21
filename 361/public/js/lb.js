(() => {
	"use strict";
	// 首页轮播图
	var aWrap = document.getElementById("banner");
	var aBanner = aWrap.getElementsByClassName("banner");
	var aSpan = aWrap.getElementsByClassName("tab")[0].getElementsByTagName("span");


	//初始化让第一张图片显示，和第一个原点显示
	aBanner[0].style.opacity = "1";
	aSpan[0].className = "active";
	var num = 0;
	for (var i = 0; i < aSpan.length; i++) {
			aSpan[i].index = i;
			//点击底部小圆点图片相对应的进行切换
			aSpan[i].onclick = function () {
					for (var j = 0; j < aSpan.length; j++) {
							num = this.index;
							aSpan[j].className = "";
							aBanner[j].style.opacity = "0";
					}
					aBanner[num].style.opacity = "1";
					aSpan[num].className = "active";
			}
	}
	var Time=function () {/*设置定时器运行的函数*/
			num++;
			if(num<0){num=4+num%5;}
			if (num < aSpan.length) {
					for (var j = 0; j < aSpan.length; j++) {
							aSpan[j].className = "";
							aBanner[j].style.opacity = "0";
					}
					aSpan[num].className = "active";
					aBanner[num].style.opacity = "1";
			} else {
					num = -1;
					Time();
			}
	}
	clearInterval(timer);
	var timer = setInterval(Time, 2000);/*调用定时器*/
	aWrap.onmouseover = function () {/*鼠标引入，清除定时器，轮播图停止*/
			clearInterval(timer);
	}
	aWrap.onmouseout = function () {/*鼠标移出，重新调用定时器，轮播图开始*/
			timer = setInterval(Time, 2000);
	}
})();