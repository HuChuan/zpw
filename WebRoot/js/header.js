$(function() {
	var username = $.cookie("username");
	var pow = $.cookie("pow");
	var token = $.cookie("token");

	//验证是否登录
	if (username != null && username != "" && token != null && token != "") {
		$("#header_info").addClass("login");
		$("#user").text(username);

		//后台验证是否登录
		$.post("check_login.do", {
			username: username,
			pow: pow,
			token: token
		}, function(data) {
			if (data.success == false) {
				$.removeCookie("username");
				$.removeCookie("pow");
				$.removeCookie("token");
				$("#header_info").removeClass("login");
			} else {
				if (pow == 1) {
					$("#header_nav").addClass("cmuser");
					$("#user").attr("href", "userspace.jsp");
					$("#personal").attr("href", "userspace.jsp");
				} else if (pow == 2) {
					$("#header_nav").addClass("epuser");
					$("#user").attr("href", "enterprise.jsp");
					$("#personal").attr("href", "enterprise.jsp");
				} else if (pow == 3) {
					$("#header_nav").addClass("admin");
					$("#user").attr("href", "admin.jsp");
					$("#personal").attr("href", "admin.jsp");
				}
			}
		}, "json");

		//后台验证是否有新消息
		/*$.post("check_isNews.do", {
			username: username
		}, function(data) {
			if (data.success == true) {
				$("#new_mess_dot").removeClass("hidden");
			}
		}, "json");*/
	}
});

function logout() {
	$.get("logout.do");
	$.removeCookie("username");
	$.removeCookie("pow");
	$.removeCookie("token");
	location.reload();
}