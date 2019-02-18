(()=>{
	//var txtUname = document.getElementById("uname");
	//console.log(txtUname);
	// var txtphone=document.getElementById("mobile");
	// console.log(txtphone);
	// var txtUpwd = document.getElementById("upwd");
	// console.log(txtUpwd);
	// var txtRepwd=document.getElementById("repassword");
	/*//鼠标移入事件
//txtUname.onfocus=getFocus;
txtphone.onfocus=getFocus;
txtUpwd.onfocus=getFocus;
txtRepwd.onfocus=getFocus;
 function getFocus(){          //封装鼠标移入事件getFocus方法
		var parentDiv=this; //获取当前元素
    parentDiv.style.border="1px solid #999";//当鼠标选中当前input，当前元素边框高亮显示
    var hideDiv=parentDiv.previousElementSibling;//上一个兄弟元素节点
    hideDiv.style.visibility="visible" 
 };  */
 //获得焦点时-----start
 //1.查找触发事件的元素 //找到这几个input位置
 var txtUname = document.getElementsByName ("uname")[0];
 console.log(txtUname); 
 var txtUphone = document.getElementsByName ("phone")[0];
 console.log(txtUphone);
 var txtUpwd = document.getElementsByName ("upwd")[0];
 console.log(txtUpwd);
 var txtRpwd = document.getElementsByName ("rpwd")[0];
 console.log(txtRpwd);
 //2.绑定事件处理函数 
 //当这些文本框获得焦点时
 txtUname.onfocus =txtUphone.onfocus =txtUpwd.onfocus =txtRpwd.onfocus =function () {
	 var txt = this;
//3.查找要修改的元素 找到下一个兄弟p标签
var p = txt.nextElementSibling;
console.log(p);
//4.修改元素
p.className = "";
txt.className = "txt_focus";
	 }
//获得焦点时-----end

//失去焦点注册验证----start
txtUname.onblur = function () {
	vali (this,/^\w{1,10}$/);
}
txtUphone.onblur=function(){
	vali(this,/^1[3-9]\d{9}$/);
}
txtUpwd.onblur=function(){
	vali(this,/^[0-9A-Za-z]{6,12}$/);
}
txtRpwd.onblur=function(){
	vali(this,/^[0-9A-Za-z]{6,12}$/);
}

	//封装验证方法
	function vali (txt,regExp) {
		var pText = txt.nextElementSibling;
		if (regExp.test (txt.value)) {
			pText.className = "success-text";
			pText.innerHTML = "通过信息验证";
			return true;
		} else {
			pText.className = "fail-text";
			pText.innerHTML = "格式不正确，请重新输入。";
			return false;
		};
	}; 
	//失去焦点注册验证----end
/*  	var isRegister=false;
	txtphone.onblur=function () {
		var uphone=txtphone.value;
		// var isTrue=vali(this,/^1[3-8]\d{9}$|(\w+@[0-9A-Za-z-]+(\.[0-9a-zA-Z-]+)+)/); 
 	if (true) {
 	ajax ( {
 		url:"http://127.0.0.1:8080/user/checkUname",
 		type:"get",
 		data:"uname="+uphone,
 		dataType:"json"
 		}).then (res=>{
			console.log(res);
 		if (res.ok==1) {
 			var pText=this.previousElementSibling;
 			pText.className="fail-text";
 			pText.innerHTML="该手机号码已被注册";
 			isRegister=false;
 			return isRegister;
 		}else {
			 console.log(res);
			 var pText = this.previousElementSibling;
			 console.log(pText);
 			pText.className="success-text";
 			pText.innerHTML="恭喜！该手机号码可以注册";
 			isRegister=true;
 			return isRegister;
 			};
 		});
	 };
	};

// 	txtUpwd.onblur = function () {
// 		vali (this,/^[a-zA-Z0-9_]{6,12}$/);
// 	};
// 	txtRepwd.onblur = function () {
// 		if (txtUpwd.value == txtRepwd.value){
// 			var pText = this.previousElementSibling;
// 			pText.className = "success-text";
// 			pText.innerHTML = "两次输入密码一致";
// 		}else {
// 			var pText = this.previousElementSibling;
// 			pText.className = "fail-text";
// 			pText.innerHTML = "两次输入的密码不一致";
// 		}
// 	}  

   var inp4 = document.getElementById ("inp4");
	console.log(inp4);
	//用户注册
	inp4.onclick= function(){
 	if (vali (txtphone,/^1[3-8]\d{9}$|(\w+@[0-9A-Za-z-]+(\.[0-9a-zA-Z-]+)+)/)==true&&vali (txtUpwd,/^[a-zA-Z0-9_]{6,12}$/)==true&&txtUpwd.value==txtRepwd.value){ 
			var $uname = txtphone.value;
			console.log($uname);
			var $upwd = txtUpwd.value;
			console.log($upwd);
			var formData="uname="+$uname+"&upwd="+$upwd;
		ajax ({
				url:"http://127.0.0.1:8080/user/register",
				type:"post",
				data:formData,
				dataType:"json"
			}).then (res=> {
				 if (res.ok == 1) {	
					 location.href="http://127.0.0.1:8080/index.html"
				}
			}) 
		}
	} */
})();
 