var loginInfo = document.getElementById('login-info');
var chbAll, chbs;//获取全选按钮与选择按钮
var load = function () {
  if (sessionStorage.getItem('uname') && sessionStorage.getItem('uid')) {
    loginInfo.innerHTML = `欢迎回来！${sessionStorage.getItem('uname')}`;
    /* console.log('已经登录'); */
    //如果登录，请求数据并展现
    var uid = sessionStorage.getItem('uid');
    var url = `http://localhost:3000/user/cart`;
    var data = `uid=${uid}`;
    ajax({ url, data, type: 'post', dataType: 'json' }).then((res) => {
       /* console.log(res); */
      var cartItemContainer = document.getElementById('cartItemContainer');
      var html = '';
      if (res.length> 0) {
        for (item of res) {
          html += `<tr>
            <td><input type="checkbox" name="" ></td>
            <td><img src="http://127.0.0.1:3000/${item.pid}.jpg"></td>
            <td>${item.title.lenght < 10 ? item.title : item.title.slice(0, 10) + '...'}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
            <button>-</button>
            <input type="text" readonly value='${item.count}' data-iid=${item.iid}>
            <button>+</button>
            </td>
            <td>￥${(item.price * item.count).toFixed(2)}</td>
            <td><input type="button" value="删除" onclick='del(${item.iid})'></td>
            </tr>`;

        }
        cartItemContainer.innerHTML = html;
        //获取按钮
        chbAll = document.querySelector(
          "table>thead td:first-child>input"
        );
        /* console.log(chbAll); */
        chbs = document.querySelectorAll(
          "#cartItemContainer>tr>td:first-child>input"
        );
        /*  console.log(chbs); */

        //点击全选时，每项选择
        chbAll.onclick = function () {

          for (var chb of chbs) {
            chb.checked = chbAll.checked
          }
        }
        //单独点击选择时
        for (var chb of chbs) {
          chb.onclick = function () {
            var chb = this;
            //3. 查找要修改的元素——chbAll
            //4. 修改元素
            var unchecked = document.querySelector(
              "#cartItemContainer>tr>td:first-child>input:not(:checked)"
            );
            chbAll.checked = unchecked == null;
          }
        }


        //商品数量的加减
        //获取减号按钮元素
        var minbtns=document.querySelectorAll('#cartItemContainer>tr>td:nth-child(5)>button:first-child');
        /* console.log(minbtns); */
        //循环绑定事件
        for(minbtn of minbtns){
          minbtn.onclick=function(){
            var btn=this;
            var iid=Number(btn.nextElementSibling.getAttribute('data-iid')) ;
            var count=Number(btn.nextElementSibling.value);
            var total=btn.parentNode.nextElementSibling.innerHTML.slice(1);
            var price=btn.parentNode.previousElementSibling.innerHTML;
            /* console.log(total,price); */
            if(count<1){del(iid)}
            //执行AJAX操作
            var url='http://localhost:3000/user/mincount';
            var data=`iid=${iid}&count=${count}`;
            ajax({ url, data, type: 'get', dataType: 'json' }).then((res)=>{
             /*  if(res.code==1)window.location.reload(); */
             btn.nextElementSibling.value-=1;
             btn.parentNode.nextElementSibling.innerHTML=`￥${(btn.nextElementSibling.value*price).toFixed(2)}`;
            });
          };
        }
        //获取加号按钮元素
        var addbtns=document.querySelectorAll('#cartItemContainer>tr>td:nth-child(5)>button:nth-child(3)');
        /* console.log(addbtns); */
         //循环绑定事件
         for(addbtn of addbtns){
          addbtn.onclick=function(){
            var btn=this;
            var iid=Number(btn.previousElementSibling.getAttribute('data-iid'));
            var count=Number(btn.previousElementSibling.value);
            var total=btn.parentNode.nextElementSibling.innerHTML.slice(1);
            var price=btn.parentNode.previousElementSibling.innerHTML;
            /* console.log(total,price); */
            if(count==99)return;
            //执行AJAX操作
            var url='http://localhost:3000/user/addcount';
            var data=`iid=${iid}&count=${count}`;
            ajax({url, data, type: 'get', dataType: 'json' }).then((res)=>{
             /*  if(res.code==1)window.location.reload(); */
             btn.previousElementSibling.value=++count;
             btn.parentNode.nextElementSibling.innerHTML=`￥${(btn.previousElementSibling.value*price).toFixed(2)}`;
            });
          }
        }


        var sum=function(){console.log('sum');}
      }else{
        var table=document.getElementsByTagName('table')[0];
        table.innerHTML=`<a href='/index.html'>还没有商品去购买</a>`
      }
    });
  } else {

    var s = 4;
    var t1 = setInterval(() => {
      loginInfo.innerHTML = `${s}秒后跳转到<a href="/login.html">登录</a>页面`;
      if (s == 0) {
        clearInterval(t1);
        location.href = '/login.html'
      }
      s--;
    }, 1000)



  }
}

//删除函数
var del=function(id){
  var r=confirm('你确定要删除此商品');
  if(r){
   var url=`http://localhost:3000/user/del`;
   var iid = id;
   var data=`iid=${iid}`;
   ajax({ url, data, type: 'get', dataType: 'json' }).then((res) => {
    if(res.code==1){
      window.location.reload()
    }else{
      alert('删除失败');
    }
   })
  }else{
    return;
  }
};
var delAll=function(){
  var r=confirm('你确定要删除所有商品');
  if(r){
   var url=`http://localhost:3000/user/delAll`;
   var uid = sessionStorage.getItem('uid');
   var data=`uid=${uid}`;
   ajax({ url, data, type: 'get', dataType: 'json' }).then((res) => {
    if(res.code==1){
      window.location.reload()
    }else{
      alert('删除失败');
    }
  })
  }else{
    return;
  }
}
