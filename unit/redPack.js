$(function() {
	//生成从minNum到maxNum的随机数
	function randomNum(minNum, maxNum) {
		switch(arguments.length) {
			case 1:
				return parseInt(Math.random() * minNum + 1, 10);
				break;
			case 2:
				return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
				break;
			default:
				return 0;
				break;
		}
	}
	var top = 0,
		left = 0,
		width = 0,
		len = 0,
		html = "",
		index = 1;

	var t0 = setInterval(function() {
		left = randomNum(5, 80); //不产生27-63
		while(left > 27 && left < 63) {
			left = randomNum(5, 80)
		}
		top = randomNum(30, 85); //不产生40-80
		while(top > 40 && top < 80) {
			top = randomNum(30, 85)
		}
		width = randomNum(10, 20)
		len = $(".box img").length;
		var count = index % 6 == 0 ? 6 : index % 6
		$(".box img:nth-child(" + count + ")").css({
			"width": width + "%",
			"top": top + "%",
			"left": left + "%"
		});
		index++
	}, 1000);
	mui("body").on("tap", ".redPack", function() {
		clearInterval(t0); //关闭红包自动移动
		var num = $("footer .l .num").attr("data-num") * 1; //待领取收益
		console.log(num)
		if(num <= 0) {
			mui.toast("暂时没有可领取的红包呢")
			return;
		}
		var count = $("footer .r .num").attr("data-num") * 1; //今日累计
		$(".box img").addClass("remove");
		$(".box img").css({
			"top": "110%",
			left: "40%"
		})
		var t = setInterval(function() {
			num -= 0.01;
			$("footer .l .num").html(num.toFixed(2)).attr("data-num", num.toFixed(2));
			if(num - 0.01 < 0) {
				clearInterval(t);
			}
		}, 5);
		var t1 = setInterval(function() {
			count += 0.01;
			$("footer .r .num").html(count.toFixed(2)).attr("data-num", count.toFixed(2))
			if(num - 0.01 < 0) {
				clearInterval(t1);
			}

		}, 5)
		//mui.ajax('http://server-name/login.php',{
		//    data:{
		//        username:'username',
		//        password:'password'
		//    },
		//    dataType:'json',//服务器返回json格式数据
		//    type:'post',//HTTP请求类型
		//    timeout:10000,//超时时间设置为10秒；
		//    headers:{'Content-Type':'application/json'},
		//    success:function(data){
		//        //服务器返回响应，根据响应结果，分析是否登录成功；
		//    },
		//    error:function(xhr,type,errorThrown){
		//        //异常处理；
		//        console.log(type);
		//    }
		//});
	})
	for(var i = 0, len = $(".box img").length; i < len; i++) {
		document.querySelectorAll(".box img")[i].addEventListener("transitionend", myFunction);
	}
	function myFunction() {
		if($(this).hasClass("remove")) {
			$(this).removeClass("remove")
			$(this).css({
				"opacity": "0",
				"transition-duration": ".5s"
			});
		}
	}
})