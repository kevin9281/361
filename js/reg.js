//注册验证
//1、获取名称、密码、验证密码元素，提示信息元素
var username = document.getElementById('login_name');
var upwd1 = document.getElementById('login_pwd1');
var upwd2 = document.getElementById('login_pwd2');
var ckinfo = document.getElementsByClassName("ck-info");
var upwdinfo = ckinfo[1];
var span = ckinfo[0];
var form = document.getElementById('reg-form');
var emailreg = new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
var phonereg = new RegExp(/^[1][3-9][0-9]{9}$/);
var unok = false, pdok = false;

//2、验证用户名
//获得焦点时提示
username.onfocus = function () {
  /* var hid=username.parentElement.nextElementSibling;
  hid.className='hid'; */
  span.style.display = 'block';
}
//验证用户名是否正确
username.onblur = function () {
  var username = this;
  var txt = username.value;

  if (emailreg.test(txt) || phonereg.test(txt)) {
    unok = true;
    span.innerHTML = '格式符合要求'
  } else {

    span.innerHTML = '格式不正确'
    span.className = 'ck-info'
  }
}


//3、验证密码
upwd1.onblur = upwd2.onblur = function () {
  if (upwd1.value == upwd2.value && upwd1.value != '') {
    pdok = true;
    upwdinfo.style.display = 'none';
  } else {
    upwdinfo.innerHTML = '密码不一致';
    upwdinfo.style.display = 'block';
  }
}

//判断能否提交注册,通过
var regbtn=document.getElementById('regbtn');
regbtn.onclick=function reg(e){
  
  if (unok && pdok) {
    var url='http://localhost:3000/user/reg';
    var data=`username=${username.value}&&upwd=${upwd1.value}`
    ajax({url,data,type:'post',dataType:'json'})
    .then((res)=>{
     if(res.code==1){
       location.href='/login.html'
     }else if(res.code==-1){
      
     }
    })
   
  } else {
    alert('不能为空');
    e.preventDefault();
   
  }
}