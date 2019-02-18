/**
 * Cart @Ljp  20170817
 */
$(function() {
  $(".product_select").click(function() {
    $(this).toggleClass("product_select2");
    if ($("span.product_select").length == $("span.product_select2").length) $("div.whole span").addClass("select");
    else $("div.whole span").removeClass("select");
    $("b#yx-cart").html($("span.product_select2").length);
    getCartTotalPrice();
    return true;
  });
  $(".cart-productSelect .whole span").click(function() {
    $(this).toggleClass('select');
    if ($(this).hasClass("select")) $("span.product_select").addClass('product_select2');
    else $("span.product_select").removeClass('product_select2');
    $("b#yx-cart").html($("span.product_select2").length);
    getCartTotalPrice();
    return true;
  });
  /**
	 * @Ljp close login iframe
	 */
  $(document).on("click", ".sign img.close,button.cancel",
  function() {
    $("div.signPopup").remove();
    return true;
  });
  //add - less
  $(document).on("click", "div.cart-productNumber button",
  function() {
    var obj = $(this);
    cartid = obj.parent().attr("data-cartid"),
    number = obj.siblings("input").val(),
    type = obj.attr("data-type");
    if (!cartid) return false;
    if (type == 'less') number--;
    else number++;
    if (number <= 0) return false;
    $.post(changeUrl, {
      cartid: cartid,
      num: number,
      type: type
    },
    function(result) {
      if (result.status == '0') {
        obj.siblings("input").val(number);
        //jisuan price
        var xprice = parseInt(number) * parseFloat(obj.parent().parent().siblings("li.price___3CU0s").find("h3").attr("data-price"));
        obj.parent().parent().siblings("li.quantity___1M_ns").html(xprice.toFixed(2));
        getCartTotalPrice();
        return true;
      } else {
        obj.siblings() obj.parent().append('<p class="prompt" style="width:274px;margin:10px auto 20px !important;position: absolute;top: 0px;left: 30px;">* ' + result.msg + '</p>');
        setTimeout(function() {
          obj.siblings('p.prompt').remove();
        },
        2000);
        return false;
      }
    },
    "json");
  });
  //delete
  $(document).on("click", "div.right___2WZr a#cartdel",
  function() {
    popUp("您确实要把该宝贝移出购物车吗？", $(this).parent().attr("data-cartid"));
  });

  // delete goods
  $(document).on("click", "div.popup-operation button#confirm",
  function() {
    var obj = $(this),
    delId = obj.parent().attr("data-cartid");
    $.post(delUrl, {
      delid: delId
    },
    function(result) {
      $("div.popup").remove();
      if (result.status == '0') {
        $("div#cart_" + delId).remove();
        if ($("div.body___2MMoL").length <= 0) {
          $("div.listItem___3aUCt").append('<div class="orderCheckout-codeNull" style="padding-bottom:150px; padding-top:50px; padding-left:22px;">您的购物车是空的，马上 <a href="/Product/shop.html" style="color:#F99302; text-decoration: underline;">去逛逛</a></div>');
          $("div.cart-productSelect").remove();
          $("a.shopping span").html("0");
        } else {
          $("a.shopping span").html($("li.desc___3cVUz span.product_select").length);
          getCartTotalPrice();
        }
        return true;
      } else {
        return false;
      }
    },
    "json");
  });
  //remove to
  $(document).on("click", "div.cart-product-operation a#remove",
  function() {
    var obj = $(this),
    delId = obj.parent().attr("data-cartid");
    $.post(delUrl, {
      delid: delId,
      type: "collect"
    },
    function(result) {
      if (result.status == '0') {
        $("div#cart_" + delId).remove();
        if ($("div.body___2MMoL").length <= 0) {
          $("div.listItem___3aUCt").append('<div class="orderCheckout-codeNull" style="padding-bottom:150px; padding-top:50px; padding-left:22px;">您的购物车是空的，马上 <a href="/Product/shop.html" style="color:#F99302; text-decoration: underline;">去逛逛</a></div>');
          $("div.cart-productSelect").remove();
          $("a.shopping span").html("0");
        } else {
          $("a.shopping span").html($("li.desc___3cVUz span.product_select").length);
          getCartTotalPrice();
        }
        return true;
      } else if (result.status == '2') {
        iframeForLogin();
        return false;
      } else {
        return false;
      }
    },
    "json");
  });
  //
  $(document).on("click", "div.product-buy button#jiesuan",
  function() {
    var cartstr = "";
    $("li.desc___3cVUz span.product_select2").each(function(i) {
      var ncartid = $(this).attr("data-cartid");
      cartstr += ncartid + ',';
    });
    $.post(buyUrl, {
      cartstr: cartstr
    },
    function(result) {
      if (result.status == '0') {
        window.location.href = result.msg;
      } else if (result.status == '2') {
        iframeForLogin();
        return true;
      } else {
        return false;
      }
    },
    "json");
  });
  getCartTotalPrice();
  cartAllselect();
});

function cartAllselect() {
  if ($("span.product_select").length == $("span.product_select2").length) $("div.whole span").addClass("select");
  else $("div.whole span").removeClass("select");
  $("b#yx-cart").html($("span.product_select2").length);
}

function getCartTotalPrice() {
  var totalprice = "0.00";
  $("li.desc___3cVUz span.product_select2").each(function(i) {
    obj = $("li.desc___3cVUz span.product_select2").eq(i).parent();
    var price = parseFloat(obj.siblings("li.price___3CU0s").find("h3").attr("data-price"));
    var number = parseInt(obj.siblings("li.discount__sadw").find("input").val());
    var thisprice = parseFloat(price * number);
    totalprice = parseFloat(totalprice) + parseFloat(price * number);
    obj.siblings("li.quantity___1M_ns").html(thisprice.toFixed(2));
  });
  if (totalprice > 0) $("div.cart-productBalance span").html("￥" + totalprice.toFixed(2));
  else $("div.cart-productBalance span").html("￥" + totalprice);
}

/**
 * loginiFrame  @Ljp 20170817
 */
function iframeForLogin() {
  $("div.signPopup").remove();
  var optStr = "";
  optStr += '<div class="signPopup">';
  optStr += '<div class="sign data-table">';
  optStr += '<img src="' + baseUrl + '/images/close.png" class="close">';
  optStr += '<img src="' + baseUrl + '/images/nav/logo.png" class="logo"/>';
  optStr += '<input type="text" placeholder="请输入帐号或手机号码" id="Laccount"/>';
  optStr += '<input type="password" placeholder="输入密码" id="Lpassword"/>';
  optStr += '<div class="statement">';
  optStr += '<b class="fl"></b>';
  optStr += '<a href="javascript:;">（记住我）两周内自动登录</a>';
  optStr += '</div>';
  optStr += '<button>立即登录</button>';
  optStr += '<div>';
  optStr += '<a href="/Forget/index.html" class="forgotPassword">忘记密码</a>';
  optStr += '<a href="/Member/register.html" class="sign-register">注册361°帐号</a>';
  optStr += '</div>';
  optStr += '</div>';
  $("body").append(optStr);
}