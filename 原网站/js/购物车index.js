$(function() {
  /**
	 * @Ljp close login iframe
	 */
  $(document).on("click", ".revise-password-con img.close,button.cancel",
  function() {
    $("div.popup").remove();
    return true;
  });
});
function popUp(optStr, delid) {
  var str = "";
  str += '<div class="popup">';
  str += '<div class="revise-password-con popup-con data-table">';
  str += '<img src="' + baseUrl + '/images/close.png" class="close">';
  str += '<h2>' + optStr + '</h2>';
  str += '<div class="popup-operation" data-cartid="' + delid + '">';
  str += '<button class="cancel">取消</button><button id="confirm">确定</button>';
  str += '</div></div></div>';
  $("body").append(str);
  return true;
}