$(function() {
  //换验证码
  $(document).on("click", "img#change-count,a.change-count",
  function() {
    var timenow = new Date().getTime();
    $("img#change-count").attr("src", "/Index/verify.html?t=" + timenow);
    return true;
  });
  
  //登录验证
  $(document).on('click', '.sign button', //给class为.sign 下的button元素绑定点击事件 
  function() {             
    var login = "0";      //声明login为字符串0
    var Laccount = $('#Laccount').val();  //声明laccount为id为laccount的提交内容val
    var Lpassword = $('#Lpassword').val(); //声明lpassword为id内容lpassword的提交内容val
    var reg = /^[a-zA-Z0-9]{6,20}$/;      //声明reg为一个正则验证
    $("#Lpassword").prev('.prompt').remove(); //删除提示语 id为lpassword的上一个兄弟元素class为prompt移除
    $("#Laccount").prev('.prompt').remove(); //删除提示语 id为laccount的上一个兄弟元素class为prompt移除
    if (!Laccount) {  //如果 不是用户名提交的内容
      $("#Laccount").before("<p class='prompt'>* 帐号不能为空</p>"); //增加提示语
      return false; //返回false  before选择器在备选元素的内容前面插入内容
    }
    if (!Lpassword) {  //如果 不是密码提交的内容
      $("#Lpassword").before("<p class='prompt'>* 密码不能为空</p>"); //增加提示语
      return false; //返回false 在提交密码前插入内容提示语
    }
    if (!reg.test(Lpassword)) { //如果密码没通过正则验证
      $("#Lpassword").before("<p class='prompt'>* 请输入6-20位数字与字母组合密码</p>"); //增加提示语
      return false;//返回false  密码前面插入提示语
    }
    if (!$("div.statement b").hasClass("read")) login = 1;//如果div下b标签class不包含read login=1
    $.post(loginUrl, { //$.post()  jq里面简单的post请求 //用于响应浏览器访问的路径
      acc: Laccount,   //用于响应浏览器访问认证的账户名
      pwd: Lpassword,  //用于响应浏览器访问认证请求的密码
      nologin: login,  //用于响应浏览器访问的登录
      loginfrom: loginfrom //用于响应浏览器访问的登录表单
    },
    function(result) { //声明一个函数 传入参数result
      if (result.status == '1') { //如果restlt里面返回窗口状态栏中的文本 等于 字符串 1
        $("#Laccount").before("<p class='prompt'>* " + result.msg + "</p>"); //就执行增加提示语 
        return false; //返回false
      } else { //否则
        if (loginfrom == 'login') window.location.href = result.msg;//如果浏览器访问的登录表单等于login 本页跳转
        else { //否则
          window.location.reload(true); //重新加载当前文档 刷新
          $("div.signPopup").remove(); //找到div 移除class 为signPopup
        }
        return true;//返回true
      }
    },
    "json"); //转为json字符串
  });

  //nologin
  $(document).on("click", "div.statement b",//找到div为class为statement下的b标签 绑定点击事件
  function() {   //声明函数
    $(this).toggleClass("read");  //如果点击的时候 不存在read则添加 存在则移除
    return true;  //返回true
  })
  
  //注册帐号验证
  $(document).on('click', '.register-btn', //找到class为register-btn的元素 绑定点击事件
  function() {  //声明函数
    var obj = "",  //声明一个变量obj 为空字符串
    nickname = $('#nickname').val(),  //声明nickname等于id为nickname的提交val内容
    mobile = $('#mobile').val(),   //声明mobile等于id为mobile的提交val内容
    code = $('#sms_code').val(),  //声明code等于id为sms_code的提交val内容
    pwd = $('#password').val(),   //声明pwd等于id为password的提交val内容
    repwd = $('#repassword').val(),  //声明repwd等于id为repassword的提交val内容
    isread = "1";   //已读为1字符串
    var reg = /^1[3|4|5|7|8]\d{9}$/; //声明正则验证
    $("#nickname,#password,#repassword,div.statement").prev('.prompt').remove();
    $('#mobile,#sms_code').parent().prev('.prompt').remove();
    if (!nickname) {
      obj = $('#nickname');
      $('#nickname').before("<p class='prompt'>* 昵称不能为空</p>");
      return false;
    }
    if (!mobile) {
      obj = $('#mobile').parent();
      $('#mobile').parent().before("<p class='prompt'>* 手机号不能为空</p>");
      return false;
    }
    if (!reg.test(mobile)) {
      obj = $('#mobile').parent();
      $('#mobile').parent().before("<p class='prompt'>* 请输入正确的手机号</p>");
      return false;
    }
    if (!code) {
      obj = $('#sms_code').parent();
      $('#sms_code').parent().before("<p class='prompt'>* 验证码不能为空</p>");
      return false;
    }
    if (code.length < 6) {
      obj = $('#sms_code').parent();
      $('#sms_code').parent().before("<p class='prompt'>* 验证码错误</p>");
      return false;
    }
    if (!pwd) {
      obj = $('#password');
      $('#password').before("<p class='prompt'>* 密码不能为空</p>");
      return false;
    }
    if (pwd.length < 6 || pwd.length > 16) {
      obj = $('#password');
      $('#password').before("<p class='prompt'>* 请输入6至16位密码</p>");
      return false;
    }
    if (!repwd) {
      obj = $('#repassword');
      $('#repassword').before("<p class='prompt'>* 请重复输入密码</p>");
      return false;
    } else if (pwd != repwd) {
      obj = $('#repassword');
      $('#repassword').before("<p class='prompt'>* 两次输入密码不一致</p>");
      return false;
    }
    if ($("div.statement b").hasClass("read")) isread = 0;
    if (!isread) {
      obj = $('div.statement');
      $("div.statement").before("<p class='prompt'>* 请阅读并同意《361°商城协议》</p>");
      return false;
    }
    $.post(regUrl, {
      nickname: nickname,
      mobile: mobile,
      code: code,
      pwd: pwd,
      repwd: repwd,
      isread: isread
    },
    function(result) {
      if (result.status == '1') {
        $('#nickname').before("<p class='prompt'>* " + result.msg + "</p>");
        return false;
      } else if (result.status == '2') {
        $('#nickname').before("<p class='prompt'>* " + result.msg + "</p>");
        return false;
      } else {
        window.location.href = result.data;
        return true;
      }
    },
    "json");
  })
  //找回密码验证
  $(document).on('click', '#checkforgetcode',
  function() {
    var mobile = $('#mobile').val(),
    code = $('#sms_code').val();
    var reg = /^1[3|4|5|7|8]\d{9}$/;
    $('#mobile').parent().prev('.prompt').remove();
    $('#sms_code').parent().prev('.prompt').remove();
    if (!mobile) {
      $('#mobile').parent().before("<p class='prompt'>* 手机号不能为空</p>");
      return false;
    }
    if (!reg.test(mobile)) {
      $('#mobile').parent().before("<p class='prompt'>* 请输入正确的手机号</p>");
      return false;
    }
    if (!code) {
      $('#sms_code').parent().before("<p class='prompt'>* 验证码不能为空</p>");
      return false;
    }
    if (code.length < 6) {
      $('#sms_code').parent().before("<p class='prompt'>* 请输入6位短信验证码</p>");
      return false;
    }
    $.post(checkSendcode, {
      mobile: mobile,
      code: code,
      stype: stype
    },
    function(result) {
      if (result.status == '0') {
        window.location.href = result.msg;
        return true;
      } else {
        $('#mobile').parent().before("<p class='prompt'>* " + result.msg + "</p>");
        return false;
      }
    },
    "json")
  })
  //获取短信验证码
  $(document).on("click", "#message",
  function() {
    var mobile = $('#mobile').val();
    var jscode = $("#jscode").val();
    var reg = /^1[3|4|5|7|8]\d{9}$/;
    $('#mobile').parent().prev('.prompt').remove();
    $('#sms_code').parent().prev('.prompt').remove();
    $('#jscode').parent().prev('.prompt').remove();
    $('#nickname').prev('.prompt').remove();
    if (!mobile) {
      $('#mobile').parent().before("<p class='prompt'>* 手机号不能为空</p>");
      return false;
    }
    if (!reg.test(mobile)) {
      $('#mobile').parent().before("<p class='prompt'>* 请输入正确的手机号</p>");
      return false;
    }
    if (!jscode) {
      $('#jscode').parent().before("<p class='prompt'>* 请输入右边算法结果</p>");
      return false;
    }
    $.post(sendCode, {
      mobile: mobile,
      stype: stype,
      jscode: jscode
    },
    function(result) {
      if (result.status == '0') {
        changeTimeDown(result.data);
        return true;
      } else {
        $('#nickname').before("<p class='prompt'>* " + result.msg + "</p>");
        return false;
      }
    },
    "json");
  })
  //修改密码 @Ljp 20170817
  $(document).on("click", "#forgeteditpwd",
  function() {
    var pwd = $("#password").val(),
    repwd = $("#repassword").val();
    $('#password').prev('.prompt').remove();
    $('#repassword').prev('.prompt').remove();
    if (!pwd) {
      $('#password').before("<p class='prompt'>* 密码不能为空</p>");
      return false;
    }
    if (pwd.length < 6 || pwd.length > 20) {
      $('#password').before("<p class='prompt'>* 请输入6至20位数字、字母</p>");
      return false;
    }
    if (!repwd) {
      $('#repassword').before("<p class='prompt'>* 请重复输入密码</p>");
      return false;
    } else if (pwd != repwd) {
      $('#repassword').before("<p class='prompt'>* 两次密码不一致</p>");
      return false;
    }
    $.post(changepwd, {
      passwd: pwd,
      repasswd: repwd,
      ctype: ctype
    },
    function(result) {
      if (result.status == '1') {
        $('#password').before("<p class='prompt'>* " + result.msg + "</p>");
        return false;
      } else {
        $('#password').before("<p class='prompt' style='color:green !important'>" + result.msg + "</p>");
        setTimeout(window.location.href = result.data, 2000);
        return true;
      }
    },
    "json")
  });
})

/**
 * 倒计时 @Ljp 20170817
 */
function changeTimeDown(stime) {
  if (!stime) stime = "60";
  time = stime;
  if (validCode) {
    validCode = false;
    code.addClass("msgs1");
    var t = setInterval(function() {
      time--;
      code.html("重新获取 ( " + time + "S ) ");
      $(".show").hide();
      $(".hide").show();
      if (time == 0) {
        time = 60;
        $(".hide").hide();
        $(".show").show();
        clearInterval(t);
        code.html("重新获取");
        validCode = true;
        code.removeClass("msgs1");
      }
    },
    1000);
  }
}