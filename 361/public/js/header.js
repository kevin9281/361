$('.search-input').hover(function() {
	$(".search").addClass('active')
});
$(document).on("click", "div.active button.search-input",
	function() {
		window.location.href = "/Product/shop.html?keyword=" + $(this).siblings("input").val();
		return true;
});

$.ajax({
	url:"http://127.0.0.1:8080/detail/product",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res);
		var html = "";
		    html += ``;
	}
})
