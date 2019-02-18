		$(function(){
			$("img.lazy").lazyload({effect: "fadeIn",load:removelazy});
			$(document).on('click','.product-filter-more',function(){
				$(this).prev("ul").toggleClass('product-filter-ul');
			})
		})
		function removelazy(){
			$("img.lazy").removeClass("lazy");
		}
		//懒加载
		var Loading=true;
		var page = "1",param ="",scrollTop = "0",loadUrl="/Product/shop.html?keyword=&page=2";
		$(window).scroll(function() {
			if ($(this).scrollTop() + $(window).height()+1900 >= $(document).height() && $(this).scrollTop() > 100) {
				if( Loading == true ){
					Loading = false;
					$.get(loadUrl,function( result ){
						if( result.status == '0' ){
							$("div.mall-con").append(result.msg);
							$("img.lazy").lazyload({effect: "fadeIn",load:removelazy});
							loadUrl = result.data;
							Loading=true;  
						}
					});
				}
			}
		}); 
