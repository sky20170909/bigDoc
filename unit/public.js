mui("nav.mui-bottom").on("tap", "a", function(e) {
	var href = $(this).prop("href");
	mui.openWindow({
		url: href
	});
})