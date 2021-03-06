var old_email = "";
// 判断是否登录
$(function() {
	if ($.cookie("username") == null || $.cookie("username") == ""
			|| $.cookie("token") == null || $.cookie("token") == ""
			|| $.cookie("pow") != "3") {
		location.href = "login.jsp";
	} else {
		$("#username").text($.cookie("username"));
	}
});

// 导航栏选择
$(function() {
	$("#content_nav").on("click", "a", function() {
		var nav = $("#content_nav>div");
		for (var i = 0; i < nav.length; i++) {
			nav[i].classList.remove("active");
		}
		this.parentNode.className = "active";
		var _id = this.parentNode.id.replace("nav_", "");
		$("#content_c")[0].className = _id;
	});

});

// 基本信息
$(function() {
	$("#change_btn").click(function() {
		$("#user_f").addClass("change");
		$("#user_f").find("input[type='text']").each(function() {
			this.readOnly = false;
		});
	});
	$("#change_return").click(function() {
		loadUserInfo();
		$("#user_f").removeClass("change");
		$("#user_f").find("input[type='text']").each(function() {
			this.readOnly = true;
		});
	});
	// 加载基本信息
	loadUserInfo();
	// 修改信息
	$("#change_sub").click(function() {
		var email = $("#user_f")[0].email.value;
		var phone = $("#user_f")[0].phone.value;
		var patt1 = /^([\w-_\.]+)@([\w\.-]{1,40})(\.)([A-z]{1,10})$/;
		var patt2 = /^1\d{10}$/;
		if (email.length > 0 && !patt1.test(email)) {
			setLog("Email格式错误", false);
		} else if (phone.length > 0 && !patt2.test(phone)) {
			setLog("手机号码格式错误", false);
		} else if (old_email == email) {
			// 修改
			$.post("update_userinfo.do", {
				username : $.cookie("username"),
				email : email,
				phone : phone
			}, function(data) {
				if (data.success == true) {
					setLog("修改成功");
					$("#user_f").removeClass("change");
				} else {
					setLog("修改失败", false);
				}
			}, "json");
		} else {
			$.post("check_email.do", {
				email : email
			}, function(data) {
				if (data.success == false) {
					// 修改
					$.post("update_userinfo.do", {
						username : $.cookie("username"),
						email : email,
						phone : phone
					}, function(data) {
						if (data.success == true) {
							setLog("修改成功");
							$("#user_f").removeClass("change");
						} else {
							setLog("修改失败", false);
						}
					}, "json");
				} else {
					setLog("Email已被注册", false);
				}
			}, "json");
		}
	});
});

// 修改密码
$(function() {
	$("#psw_btn").click(function() {
		var old = $("#old_psw").val();
		var _new = $("#new_psw").val();
		var re = $("#re_new_psw").val();
		if (old.length < 6 || _new.length < 6) {
			setLog("密码长度不能少于6位", false);
		} else if (_new != re) {
			setLog("密码不一致", false);
		} else {
			$.post("update_password.do", {
				username : $.cookie("username"),
				old_psw : old,
				new_psw : _new
			}, function(data) {
				if (data.success == true) {
					setLog("修改成功");
					$("#psw_f")[0].reset();
				} else {
					setLog(data.reason, false);
				}
			}, "json");
		}
	});
});

// 加载会员列表
$(function() {
	$
			.post(
					"load_all_user.do",
					{},
					function(data) {
						data = data.list;
						for (var i = 0; i < data.length; i++) {
							var pow = "个人用户";
							if (data[i].pow == 2) {
								pow = "企业用户";
							} else if (data[i].pow == 3) {
								pow = "管理员";
							}
							if(!data[i].phone){
								var phone = "";
							}else {
								var phone = data[i].phone;
							}
							var $tr = $("<tr></tr>");
							var $td1 = $('<td class="center"><img src="'
									+ data[i].img + '"></td>');
							var $td2 = $('<td>' + data[i].username + '</td>');
							var $td3 = $('<td>' + data[i].email + '</td>');
							var $td4 = $('<td>' + phone + '</td>');
							var $td5 = $('<td class="center">' + pow + '</td>');
							var $td6 = $('<td class="center">'
									+ data[i].reg_time + '</td>');
							var $td7 = $('<td class="center"><a onclick="deleteUser(this,\''+data[i].username+'\')">删除</a></td>');

							$tr.append($td1);
							$tr.append($td2);
							$tr.append($td3);
							$tr.append($td4);
							$tr.append($td5);
							$tr.append($td6);
							$tr.append($td7);
							$("#c_manage>table").append($tr);
						}
					}, "json");
});

// 设置header导航激活样式
$("#header_nav").addClass("personal");

// 消息提示设置
function setLog(text, error) {
	$("#log_info").text(text);
	if (error == false) {
		$("#log_info").addClass("error");
	} else {
		$("#log_info").removeClass("error");
	}
	$("#log_info").fadeIn(200);
	setTimeout(function() {
		$("#log_info").fadeOut(200);
	}, 2000);
}

// 加载用户基本信息
function loadUserInfo() {
	$.post("load_userinfo.do", {
		username : $.cookie("username")
	}, function(data) {
		var pow = "个人用户";
		var f = $("#user_f")[0];
		if (data.pow == "2") {
			pow = "企业用户";
		} else if (data.pow == "3") {
			pow = "管理员";
		}
		f.username.value = data.username;
		f.pow.value = pow;
		f.email.value = data.email;
		f.phone.value = data.phone;
		$("#user_img").attr("src",data.img);
		old_email = data.email;
	}, "json");
}

// 删除用户
function deleteUser(obj,username) {
	/*var username = $(obj).parent().parent().find("td")[1].text();*/
	// 删除用户
	$.post("delete_user.do", {
		username : username
	}, function(data) {
		if (data.success == true) {
			setLog("删除成功");
			$(obj).parent().parent().remove();
		} else {
			setLog("删除失败", false);
		}
	}, "json")
}