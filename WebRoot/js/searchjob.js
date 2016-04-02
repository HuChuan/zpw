//注入省份列表
$(function() {
	for (var i = 0; i < area_list.length; i++) {
		$op = $("<option>" + area_list[i] + "</option>");
		$("#city_filter").append($op);
	}
});

//返回顶部
$(function() {
	var time = 500;
	$(document).scroll(function(e) {
		var top = $(document).scrollTop();
		if (top >= 200) {
			$("#top_btn").fadeIn(300);
		} else {
			$("#top_btn").fadeOut(300);
		}
	});
	$("#top_btn").click(function() {
		var TOP = $(document).scrollTop();
		var speed = TOP / time;
		var timer = setInterval(function() {
			window.scrollBy(0, speed * (-10));
			if ($(document).scrollTop() == 0) {
				clearInterval(timer);
			}
		}, 1);
	});
});

//加载搜索职位列表
function loadJob(kw, city, edu, money, page) {
	$.get("load_all_job.do", {
		kw: kw,
		city: city,
		edt: edu,
		money: money,
		page:page
	}, function(data) {
		
	}, "json");
}