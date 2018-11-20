;$(function(){
	mui("ol").on("tap","li",function(){
		var cName = this.getAttribute("index")*1;
		$("ol>li.active").removeClass("active");
		$(this).addClass("active");
		$(".mui-table-view.active").removeClass("active");
		if(cName==1){
			$("#tab1").addClass("active");
		}else{
			$("#tab2").addClass("active");
		}
	})
	mui("ul.mui-table-view").on("tap","li",function(){
		var id = this.getAttribute("id");
		$("ol>li.active").removeClass("active");
		//传值进入
		localStorage["Notice_info_id"]=id;
  		//打开公告详情
		mui.openWindow({
		  id:'detail',
		  url:'Notice_info.html'
		});
	})
	
})

