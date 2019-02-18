var as=document.querySelectorAll('#login .tabMenu>li>[data-toggle=tab]');
/* console.log(as); */
for(var a of as){
 
 a.onclick=function(){
  var a=this;
  var id=a.getAttribute("data-id");
  var ul=document.querySelector(id);
  var uls=document.querySelectorAll("#login-content>ul");
  var lis=document.querySelectorAll('#login>.tabMenu>li');
  for(li of lis){
    li.style.borderBottom='0'
  }
  for(u of uls){
    u.style.display='none';
  }
  a.parentElement.style.borderBottom='2px solid transparent';
  a.parentElement.style.borderColor='#00c8c8';
  ul.style.display='block';
 }
}


//登录函数
function login(){
  var username=document.getElementById('username').value;
  var upwd=document.getElementById("password").value
  var data=`username=${username}&&upwd=${upwd}`;
  var url='http://localhost:3000/user/login'
  var dataType='json';
  ajax({url,type:'post',data,dataType}).then((res)=>{
    
    if(res.code==1){
      sessionStorage.setItem('uname',res.uname);
      sessionStorage.setItem('uid',res.uid);
      location.href='/index.html';
    }else{
      alert('账号或密码错误')
    }
  })
}