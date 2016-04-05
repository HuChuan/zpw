//加载数据
$(function() {
	var search = location.search;
	var id = search.substr(search.indexOf("id=") + 3);
	$.get("show_job_info.do", {
		id : id
	}, function(data) {
		$("head title").html(data.name + " - 职位信息 - 招聘网");
		$("#job_name").text(data.name);
		$("#job_city").text(data.city);
		$("#job_edu").text(data.edu);
		$("#job_exp").text(data.experience);
		$("#job_money").text(data.money);
		$("#job_intro").text(data.intro);
		$("#job_time").text(data.pub_time);
		$("#ep_name").text(data.ep_name);
		$("#user_img").attr("src", data.ep_img);
	}, "json");

	// 投递简历
	$("#apply").click(
			function() {
				// 判断是否登录
				$(function() {
					if ($.cookie("username") == null
							|| $.cookie("username") == ""
							|| $.cookie("token") == null
							|| $.cookie("token") == ""
							|| $.cookie("pow") != "1") {
						setLog("个人用户登录后才能投递简历", false);
					} else {
						$.post("check_vitae.do", {
							username : $.cookie("username")
						}, function(data) {
							if (data.success == true) {
								// 验证是否投递了这个职位的简历
								$.post("check_apply_job.do", {
									username : $.cookie("username"),
									id : id
								}, function(data) {
									if (data.success == true) {
										$.post("apply_job.do", {
											username : $.cookie("username"),
											id : id
										}, function(data) {
											if (data.success == true) {
												setLog("简历投递成功");
											} else {
												setLog("投递失败", false);
											}
										}, "json");
									} else {
										setLog("您已经申请了该职位", false);
									}
								}, "json");
							} else {
								alert("你还没有简历，请到个人中心添加简历");
							}
						}, "json");
					}
				});
			});
});

// 消息提示设置
function setLog(text, error) {
	$("#log_info").text(text);
	if (error == false) {
		$("#log_info").addClass("error");
	}
	$("#log_info").fadeIn(200);
	setTimeout(function() {
		$("#log_info").fadeOut(200);
	}, 2000);
}