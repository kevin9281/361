//商城详情图片加载
$.ajax({
	url:"http://127.0.0.1:8080/detail/product",
	type:"get",
	dataType:"json",
	success:function(res){
		console.log(res);
		var html = "";
		for (var item of res) {
		    html += `<div class="commodity">
				<div class="commodity-div">
					<a href="#"><img class data-original=${item.lg}"style="width:350px; display:block;" src=${item.lg}></a>
					<div class="commodity-position">
						<div id="myscroll" class="commodity-strong clearfloat">
							<ul>
								<li>
									<img data-original=${item.lg} src=${item.mg}>
								</li>
								<li>
									<img data-bimg=${item.lg2} src=${item.mg2}>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h3>${item.title}</h3>
						<p>${item.price}.00</p>
					</div>
				</div>
			</div>`;
	};
	var product_list = $(".commodity-con-sdws")[0];
	console.log(product_list);
	$(product_list).html(html);
 }
});