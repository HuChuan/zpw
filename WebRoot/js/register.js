$(function() {

	//表单验证
	var isUser = false;
	var isPsw = false;
	var isRepsw = false;
	var isEmail = false;
	$("#username").focus(function() {
		this.parentNode.parentNode.className = "check_info";
		$(this).parent().prevAll(".form_log").text("请输入用户名，要求字符只能为英文、数字以及下划线，长度为2-20位");
	});
	$("#username").blur(function() {
		isUser = false;
		var t = this.value;
		var patt = /^[\w_]{2,20}$/;
		var log = $(this).parent().prevAll(".form_log");
		var parent = this.parentNode.parentNode;
		if (t.trim().length == 0) {
			parent.className = "check_error";
			log.text("请输入用户名");
		} else if (!patt.test(t)) {
			parent.className = "check_error";
			log.text("要求字符只能为英文、数字以及下划线，长度为2-20位");
		} else {
			$.post("check_user.do", {
				username: t
			}, function(data) {
				if (data.success == false) {
					isUser = true;
					parent.className = "";
				} else {
					parent.className = "check_error";
					log.text("用户名已存在");
				}
			}, "json");
		}
	});

	$("#psw").focus(function() {
		this.parentNode.parentNode.className = "check_info";
		$(this).parent().prevAll(".form_log").text("请输入密码，要求长度为不少于6位");
	});
	$("#psw").blur(function() {
		isPsw = false;
		var t = this.value;
		var log = $(this).parent().prevAll(".form_log");
		var parent = this.parentNode.parentNode;
		if (t.length == 0) {
			parent.className = "check_error";
			log.text("请输入密码");
		} else if (t.length < 6) {
			parent.className = "check_error";
			log.text("要求密码长度不少于6位");
		} else {
			isPsw = true;
			parent.className = "";
		}
	});

	$("#repsw").focus(function() {
		this.parentNode.parentNode.className = "";
	});
	$("#repsw").blur(function() {
		isRepsw = false;
		var t = this.value;
		var log = $(this).parent().prevAll(".form_log");
		var parent = this.parentNode.parentNode;
		if (t != $("#psw").val()) {
			parent.className = "check_error";
			log.text("密码不一致");
		} else {
			isRepsw = true;
			parent.className = "";
		}
	});

	$("#email").focus(function() {
		this.parentNode.parentNode.className = "";
	});
	$("#email").blur(function() {
		isEmail = false;
		var t = this.value;
		var patt = /^([\w-_\.]+)@([\w\.-]{1,40})(\.)([A-z]{1,10})$/;
		var log = $(this).parent().prevAll(".form_log");
		var parent = this.parentNode.parentNode;
		if (t.trim().length == 0) {
			parent.className = "check_error";
			log.text("请输入Email");
		} else if (!patt.test(t)) {
			parent.className = "check_error";
			log.text("Email格式不正确");
		} else {
			$.post("check_email.do", {
				email: t
			}, function(data) {
				if (data.success == false) {
					isEmail = true;
					parent.className = "";
				} else {
					parent.className = "check_error";
					log.text("Emial已被注册");
				}
			}, "json");
		}
	});

	$("#form_sub").click(function() {
		var val = true;
		if (!isUser) {
			val = false
			$("#username")[0].parentNode.parentNode.className = "check_error";
			$("#username").parent().prevAll(".form_log").text("请输入用户名");
		} else if (!isPsw) {
			val = false
			$("#psw")[0].parentNode.parentNode.className = "check_error";
			$("#psw").parent().prevAll(".form_log").text("请输入密码");
		} else if (!isRepsw) {
			val = false
			$("#repsw")[0].parentNode.parentNode.className = "check_error";
			$("#repsw").parent().prevAll(".form_log").text("请确认密码");
		} else if (!isEmail) {
			val = false
			$("#email")[0].parentNode.parentNode.className = "check_error";
			$("#email").parent().prevAll(".form_log").text("请输入Email");
		}

		if (val) {
			var d = $("#regist_f").serialize();
			this.disabled = true;
			this.value = "注 册 中"
			$.post("register.do", d, function(data) {
				if (data.success == true) {
					$.cookie("username",data.user.username);
					alert(data.user.username);
					$.cookie("pow",data.user.pow);
					$.cookie("token",data.user.token);
					$("#regist_log").html("注册成功！正在转到 <a href='index.jsp'>首页</a>");
					$("#regist_log")[0].className = "ok";
					setTimeout(function() {
						location.href = "index.jsp";
					}, 2000);
				} else {
					$("#regist_log").text("注册失败，请重试！");
					$("#regist_log")[0].className = "error";
					$("#form_sub")[0].disabled = false;
					$("#form_sub")[0].value = "注 册";
				}
			}, "json");
		}
		return false;
	});

	//选择用户类型样式
	$("#radio_per").click(function() {
		$("#per_bg").addClass("active");
		$("#ep_bg").removeClass("active");
	});
	$("#radio_ep").click(function() {
		$("#per_bg").removeClass("active");
		$("#ep_bg").addClass("active");
	});

});

//加载背景图片
$("body").css("background", "#F1F4F6 url(images/register_bg.jpg) repeat-x");