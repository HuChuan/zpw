//轮播器
$(function() {
	//加载主页轮播器
	$.get("load_carousel.do", {}, function(data) {
		data = data.list;
		for (var i = 0; i < data.length; i++) {
			var $a = $("<a href='" + data[i].url + "' num='" + i + "'></a>");
			var $img = $("<img src='" + data[i].img + "' alt='轮播图' />");
			if (i == 0) {
				var $span = $("<span class='active' num='" + i + "'></span>");
			} else {
				var $span = $("<span num='" + i + "'></span>");
			}
			$img.append($a);
			$("#carousel_img").append($a);
			$("#carousel_index").append($span);
		}
		play();
	}, "json");

	function play() {
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
				index = n;
				$("#carousel_img").stop();
				clearInterval(timer);
				carousel_go(n);
				timer = setInterval(function() {
					carousel_go(++index);
				}, timeout);
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
			$("#carousel_img").stop();
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
	}

});

//搜索框
$(function() {
	//改变action
	if ($.cookie("pow") == 2) {
		$("#search_f").attr("action", "searchvitae.jsp");
	}
	//输入框holder
	/*$("#search_t").keyup(function() {
		if (this.value.length > 0) {
			$("#search_holder").addClass("hidden");
		} else {
			$("#search_holder").removeClass("hidden");
		}
	});*/
	//焦点改变样式
	$("#search_t").focus(function() {
		$("#search").stop();
		$("#search_t").stop();
		$("#search_f").stop();
		$("#search").animate({
			width: "+=40px"
		}, 200);
		$("#search_t").animate({
			width: "+=40px"
		}, 200);
		$("#search_f").animate({
			backgroundColor: "rgba(86,100,117,.1)"
		}, 500);
	});
	$("#search_t").blur(function() {
		$("#search").stop();
		$("#search_t").stop();
		$("#search_f").stop();
		$("#search").animate({
			width: "-=40px"
		}, 200);
		$("#search_t").animate({
			width: "-=40px"
		}, 200);
		$("#search_f").animate({
			backgroundColor: "rgba(86,100,117,1)"
		}, 500);
	});
});

//热门企业
$(function() {
	//加载热门企业
	$.get("load_hot_ep.do", {}, function(data) {
		data = data.list;
		for (var i = 0; i < data.length; i++) {
			var $li = $("<li></li>");
			var $a = $("<a href='showenterprise.jsp?id=" + data[i].id + "'></a>");
			var $img = $("<img src='" + data[i].img + "' />");
			var $span = $("<span>" + data[i].name + "</span>");
			$a.append($img);
			$a.append($span);
			$li.append($a);
			$("#hot_ep_list").append($li);
		}

		//动画效果
		$("#hot_ep_list>li>a").mouseenter(function() {
			$(this).find("span").stop();
			$(this).find("span").css("left", "-112px");
			$(this).find("span").animate({
				left: "0"
			}, 200);
		});
		$("#hot_ep_list>li>a").mouseleave(function() {
			$(this).find("span").stop();
			$(this).find("span").css("left", "0");
			$(this).find("span").animate({
				left: "112px"
			}, 200);
		});
	}, "json");
});

//热门职位
$(function() {
	$.get("load_hot_job.do", {}, function(data) {
		data = data.list;
		for (var i = 0; i < datalength; i++) {
			var $li = $("<li></li>");
			var $div = $("<div></div>");
			var $p1 = $('<p><a class="job_name" href="showjob.jsp?id=' + data[i].id + '">' + data[i].name + '</a></p>');
			var $p2 = $('<p><a class="ep_name" href="showenterprise.jsp?id=' + data[i].ep_id + '">' + data[i].ep_name + '</a></p>');
			var $p3 = $('<p></p>');
			var $span1 = $('<span class="city">' + data[i].city + '</span>');
			var $span2 = $('<span class="money">' + data[i].money + '</span>');
			var $span3 = $('<span class="exp">' + data[i].experience + '</span>');
			var $a = $('<a href="showenterprise.jsp?id=' + data[i].ep_id + '"><img src="' + data[i].img + '" /></a>');
			$p3.append($span1);
			$p3.append($span2);
			$p3.append($span3);
			$div.append($p1);
			$div.append($p2);
			$div.append($p3);
			$li.append($div);
			$li.append($a);
			$("#hot_job_list").append($li);
		}
	}, "json");
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