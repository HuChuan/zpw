//保存页数
var currentPage = 1;
var allPage = 0;

//注入省份列表
$(function() {
	for (var i = 0; i < area_list.length; i++) {
		$op = $("<option>" + area_list[i] + "</option>");
		$("#city_filter").append($op);
	}
});

//加载列表
$(function() {
	loadJob();
	$("#search_filter").on("change", "select", loadJob);
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

//加载职位
function loadJob() {
	var search = location.search;
	var kw = search.substr(search.indexOf("kw=") + 3);
	var city = $("#city_filter").val();
	var edu = $("#edu_filter").val();
	var money = $("#money_filter").val();
	$("#search_kw").val(kw);
	loadJobList(kw, city, edu, money, currentPage);

	//加载更多
	$("#load_more.load").click(function() {
		loadJobList(kw, city, edu, money, ++currentPage);
	});
}

//加载搜索职位列表
function loadJobList(kw, city, edu, money, page) {
	$.get("load_all_job.do", {
		kw: kw,
		city: city,
		edt: edu,
		money: money,
		page: page
	}, function(data) {
		allPage = data.allpage;
		//判断为末页
		if (allPage == currentPage) {
			$("#load_more").removeClass("load");
			$("#load_more").text("没有更多数据");
		} else {
			$("#load_more").addClass("load");
			$("#load_more").text("加载更多");
		}
		data = data.list;
		for (var i = 0; i < data.length; i++) {
			var job = data[i].job;
			var ep = data[i].enterprise;
			var $li = $("<li></li>");
			var $div = $("<div></div>");
			var $p1 = $('<p><a class="job_name" href="showjob.jsp?id=' + job.job_id + '">' + job.job_name + '</a></p>');
			var $p2 = $('<p><a class="ep_name" href="showenterprise.jsp?id=' + ep.ep_id + '">' + ep.ep_name + '</a></p>');
			var $p3 = $("<p></p>");
			var $span1 = $('<span class="city">' + job_city + '</span>');
			var $span2 = $('<span class="edu">' + job_edu + '</span>');
			var $span3 = $('<span class="money">' + job_money + '</span>');
			var $a = $('<a href="showenterprise.jsp?id=' + ep.ep_id + '"><img src="' + ep_img + '" /></a>');
			$div.append($p1);
			$div.append($p2);
			$p3.append($span1);
			$p3.append($span2);
			$p3.append($span3);
			$div.append($p3);
			$li.append($div);
			$li.append($a);
			$("#search_list").append($li);
		}
	}, "json");
}