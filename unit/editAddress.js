mui.init()

  $("#city-picker").cityPicker({
    title: "选择收货地址",
    onChange: function (picker, values, displayValues) {
      console.log(values, displayValues);
    }
  });
$("body").on("tap",".btn",function(){
	var province=$("#city-picker").val();
	if(province){
		var infoAdd=$(".textarea").val();
		if(infoAdd){
			var userName=$(".userName").val().trim();
			var phone=$(".phone").val().trim();
			var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
	        if(userName){
	        	if(phone&&reg.test(phone)){
	        		console.log("发送请求")
	        	}else{
	        		mui.toast("请输入正确的手机号");
	        		$(".phone").val("");
	        		$(".phone").focus();
	        	}
	        }else{
	        	mui.toast("请输入收件人姓名");
	        	$(".userName").focus();
	        }
		}else{
			mui.toast("请填写详细地址");
			$(".textarea").focus()
		}
	}else{
		mui.toast("请选择地址");
	}
})
