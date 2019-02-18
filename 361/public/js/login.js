(()=>{
	"use strict";

 	$(document).on("blur",".sign .inp1",
	function () {
		var login ="0";
		var Laccount =$("#name").val();
		var Lpassword =$("#pwd").val();
		var reg =/^[a-zA-Z0-9]{6,20}$/;
		console.log(login);
		console.log(Laccount);
		console.log(Lpassword);
		console.log(reg);
	$("#name").prev('.prompt').remove();
	$("#pwd").prev('.prompt').remove();
	if(!Laccount) {
		$("#name").before("<p class='prompt'>* 账号不能为空</p>");
		return false;
	}
	if(!Lpassword) {
		$("#pwd").before("<p class='prompt'>* 密码不能为空</p>")
		return false;
	}
	if(!reg.test(Lpassword)) {
		$("pwd").before("<p class='prompt'>* 请输入6-20位数字与字母组合密码</p>");
		return false;
	}
	if (!$("div.statement b").hasClass("read")) login = 1;
	$.post(
		url,{
		acc: Laccount,
		pwd: Lpassword,
		},
		function(result) {
		if(result.status=="1"){
			$("#name").before("<p class='prompt'>* " + result.msg + "</p>");
			return false;
		}else{
			if(loginfrom =='login') window.location.href =result.msg;
			else{
				window.location.reload(true);
				$("div.signPopup").remove();
			}
			return true;
		 }
		},
		"json");
 });
		$(document).on("click", "div.statement b",
		function() {  
			$(this).toggleClass("read"); 
			return true;  
	})






/* 	var txtUserName=document.getElementsByClassName("inp1");
	var txtPassword=document.getElementsByClassName("inp2");
	var isRegister=false;
	txtUserName.onblur=function(){
		var unameV=txtUserName.value;
		var isTure=vali(this,/^1[3-8]\d{9}$|(\w+@[0-9A-Za-z-]+(\.[0-9a-zA-Z-]+)+)/);
		if(isTure){
				ajax({
						url:"http://127.0.0.1:8080/user/checkUname",
						type:"get",
						data:"uname="+unameV,
						dataType:"json"
				}).then(res=>{
						if(res.ok==1){
								var pText=this.previousElementSibling;
								pText.className.add="prompt success-text";
								isRegister=true;
								return isRegister;
						}else{
								var pText=this.previousElementSibling;
								pText.className="prompt fail-text";
								pText.innerHTML="该手机号码未注册，请先注册。";
								isRegister=false;
								return isRegister;  
						}
				});
		}
}

function vali(txt,regExp) {
	var pText =txt.previousElementSibling;
	if(regExp.test(txt.value)){
		pText.className ="prompt success-text";
		pText.innerHTML ="成功通过信息验证";
		return true;
	}else{
		pText.className ="prompt fail-text";
		pText.innerHTML ="输入错误,请重新输入";
		return false;
	}
 } */

})();
