$(function() {
	mui.init();
	//获取地址栏的参数
	function UrlSearch() {
		var name, value;
		var str = location.href; //取得整个地址栏
		var num = str.indexOf("?")
		str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

		var arr = str.split("&"); //各个参数放到数组里
		for(var i = 0; i < arr.length; i++) {
			num = arr[i].indexOf("=");
			if(num > 0) {
				name = arr[i].substring(0, num);
				value = arr[i].substr(num + 1);
				this[name] = value;
			}
		}
	}
	var Request = new UrlSearch(); //实例化
	var id = Request.id * 1; //商品id
	if(id==5){
		$(".info .price span").html("490购物车+￥490")
	}
	mui(".spec").on("tap", "p", function() {
		$(".prop").addClass("active");
	})
	mui(".buttons-tab").on("tap", ".tab-link", function() {
		$(".tab-link.active").removeClass("active");
		$(this).addClass("active");
		$(".tab.active").removeClass("active");
		var index = $(this).data("index");
		$("#tab" + index).addClass("active");
	})
	mui(".prop").on("tap", ".close-popup", function() {
		$(".prop").removeClass("active");
	})
	//数量的增加
	mui(".r").on("tap", ".add", function() {
		var num = $(".r .count").attr("data-count");
		num++;
		if(num > 1) {
			$(".r .minus").removeClass("disable")
		}
		$(".r .count").attr("data-count", num).html(num);
	})
	mui(".r").on("tap", ".minus", function() {
		if(!$(this).hasClass("disable")) {
			var num = $(".r .count").attr("data-count");
			num--;
			if(num > 0) {
				$(".r .count").attr("data-count", num).html(num);
			} else {
				$(this).addClass("disable")
			}
		}
	})
	//确定按钮
	mui(".btn").on("tap", "button", function() {
		$(".nums").html($(".r .count").attr("data-count")); //默认数量为1
		$(".nums").attr("data-count", $(".r .count").attr("data-count"))
		$(".prop").removeClass("active")
	})

	//立即购买
	mui("footer").on("tap",".orderDown",function(){
		mui.openWindow({
			url:"pro_info.html"
		})
	})
	//联系客服
	mui("footer").on("tap",".cart",function(){
		mui.openWindow({
			url:"http://p.qiao.baidu.com/cps/chat?siteId=12618572&userId=1525167"
		})
	})
})
