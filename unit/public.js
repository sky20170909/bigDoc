mui.init();
mui(".bottom").on("tap",".index",function(){
	console.log("index")
	mui.openWindow({
		url:'index.html'
	});
})
mui("body").on("tap",".Notice",function(){
	console.log("2")
	mui.openWindow({
		url:'Notice.html'
	});
})
mui("body").on("tap",".center",function(){
	console.log("3")
	mui.openWindow({
		url:'center.html'
	});
})
mui("body").on("tap",".cus",function(){
	mui.openWindow({
		url:'http://p.qiao.baidu.com/cps/chat?siteId=12618572&userId=1525167'
	});
})
