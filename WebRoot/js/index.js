//轮播器
$(function() {
	//配置播放时间间隔、播放速度
	var timeout = 2500;
	var speed = 300;

	var index = 0;
	var count = $("#carousel_img>a").length - 1;
	var index_count = $("#carousel_index>span");
	var timer = null;

	//设置定时器
	timer = setInterval(function() {
		carousel_go(++index);
	}, timeout);

	//点击后翻
	$("#carousel_pre").click(function() {
		clearInterval(timer);
		carousel_go(--index);
		timer = setInterval(function() {
			carousel_go(++index);
		}, timeout);
	});

	//点击前翻
	$("#carousel_next").click(function() {
		clearInterval(timer);
		carousel_go(++index);
		timer = setInterval(function() {
			carousel_go(++index);
		}, timeout);
	});

	//点击轮播器导航按钮
	$("#carousel_index").on("click", "span", function() {
		var n = this.getAttribute("num");
		if (n != index) {
			//clearInterval(timer);
			carousel_go(n);
			/*timer = setInterval(function() {
				carousel_go(++index);
			}, timeout);*/
		}
	});

	//播放指定的轮播器位置
	function carousel_go(n) {
		if (n < 0) {
			n = count;
			index = count;
		} else if (n > count) {
			n = 0;
			index = 0;
		}
		var go = n * 1024 * (-1);
		$("#carousel_img").animate({
			left: go + "px"
		}, speed);
		carousel_index(n)
	}

	//轮播导航按钮更改颜色
	function carousel_index(n) {
		for (var i = 0; i < index_count.length; i++) {
			index_count[i].classList.remove("active");
		}
		index_count[n].classList.add("active");
	}
});

//搜索框
$(function() {
	//改变action
	if ($.cookie("pow") == 2) {
		$("#search_f").attr("action", "searchvitae.jsp");
	}
	//输入框holder
	$("#search_t").keyup(function() {
		if (this.value.length > 0) {
			$("#search_holder").addClass("hidden");
		} else {
			$("#search_holder").removeClass("hidden");
		}
	});
	//焦点改变样式
	$("#search_t").focus(function() {
		$("#search").animate({
			width: "840px"
		}, 200);
		$("#search_t").animate({
			width: "690px"
		}, 200);
		$("#search_f").animate({
			backgroundColor: "#f1f4f6"
		}, 500);
	});
	$("#search_t").blur(function() {
		$("#search").animate({
			width: "800px"
		}, 200);
		$("#search_t").animate({
			width: "650px"
		}, 200);
		$("#search_f").animate({
			backgroundColor: "#566475"
		}, 500);
	});
});

//热门企业动画
$(function() {
	$("#hot_ep_list>li>a").mouseenter(function() {
		$(this).find("span").css("left", "-112px");
		$(this).find("span").animate({
			left: "0"
		}, 200);
	});
	$("#hot_ep_list>li>a").mouseleave(function() {
		$(this).find("span").css("left", "0");
		$(this).find("span").animate({
			left: "112px"
		}, 200);
	});
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

//加载并设置背景图片
$(".container_bg.carousel").css("background", "#f1f4f6 url(images/index_bg_3.png) center repeat-x");

//设置header导航激活样式
$("#header_nav").addClass("index");