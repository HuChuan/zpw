$(function() {

	//表单验证
	var isUser = false;
	var isPsw = false;
	$("#username").focus(function() {
		var parent = this.parentNode.parentNode;
		parent.className = "";
	});
	$("#username").blur(function() {
		isUser = false;
		var t = this.value;
		var log = $(this).parent().prevAll(".form_log");
		var parent = this.parentNode.parentNode;
		if (t.trim().length == 0) {
			parent.className = "check_error";
			log.text("请输入用户名 或 Email");
		} else {
			parent.className = "";
			isUser = true;
		}
	});

	$("#psw").focus(function() {
		var parent = this.parentNode.parentNode;
		parent.className = "";
	});
	$("#psw").blur(function() {
		isPsw = false;
		var t = this.value;
		var log = $(this).parent().prevAll(".form_log");
		var parent = this.parentNode.parentNode;
		if (t.length == 0) {
			parent.className = "check_error";
			log.text("请输入密码");
		} else {
			parent.className = "";
			isPsw = true;
		}
	});

	$("#form_sub").click(function() {
		var val = true;
		if (!isUser) {
			val = false;
			$("#username")[0].parentNode.parentNode.className = "check_error";
			$("#username").parent().prevAll(".form_log").text("请输入用户名 或 Email");
		} else if (!isPsw) {
			val = false;
			$("#psw")[0].parentNode.parentNode.className = "check_error";
			$("#psw").parent().prevAll(".form_log").text("请输入密码");
		}
		if (val) {
			var username = $("#username").val();
			var psw = $("#psw").val();
			var patt = /^([\w-_\.]+)@([\w\.-]{1,40})(\.)([A-z]{1,10})$/;
			//true为email登录，false为用户名登录
			if (patt.test(username)) {
				$.post("email_login.do", {
					email: username,
					password: psw
				}, function(data) {
					doLogin(data);
				}, "json");
			} else {
				
				
				$.post("username_login.do", {
					username: username,
					password: psw
				}, function(data) {
					doLogin(data);
				}, "json");
			}
		}

		return false;
	});

	//自动登录效果
	$("#checkbox_box").click(function() {
		var ck = $("#auto_login")[0].checked;
		if (ck) {
			$("#checkbox_bg").removeClass("active");
		} else {
			$("#checkbox_bg").addClass("active");
		}
	});

});

//加载背景图片
$("body").css("background", "#F1F4F6 url(images/register_bg.jpg) repeat-x");

//登录结果处理
function doLogin(data) {
	if (data.success == true) {
		if ($("#auto_login")[0].checked == true) {
			$.cookie("username", data.username, {
				expires: 7
			});
			$.cookie("pow", data.pow, {
				expires: 7
			});
			$.cookie("token", data.token, {
				expires: 7
			});
		} else {
			$.cookie("username", data.username);
			$.cookie("pow", data.pow);
			$.cookie("token", data.token);
		}
		location.href = "index.jsp";
	} else {
		$("#login_log").html("用户名或密码错误");
		$("#login_log")[0].className = "error";
	}
}