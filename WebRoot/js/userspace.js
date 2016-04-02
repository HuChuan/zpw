//判断是否登录
$(function() {
	if ($.cookie("username") == null || $.cookie("username") == "" || $.cookie("token") == null || $.cookie("token") == "" || $.cookie("pow") != "1") {
		//location.href = "login.jsp";
	} else {
		$("#username").text($.cookie("username"));
	}
});

//导航栏选择
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

//上传照片
$(function() {
	$("#upload_img").change(function() {
		if (this.files[0].type.indexOf("image") == 0) {
			/*$.ajaxFileUpload({
				url: "test.jsp",
				type: "post",
				secureuri: false,
				fileElementId: "upload_img",
				data: {
					username:"chen"
				},
				success: function(data) {
					console.log(data)
				},
				error: function(data) {
					console.log("***********:"+data)
				}
			});*/
		} else {
			setLog("只能上传图片", false);
		}

	});
});

//基本信息
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
	//加载基本信息
	var old_email = loadUserInfo();
	//修改信息
	$("#change_sub").click(function() {
		var email = $("#user_f")[0].email.value;
		var phone = $("#user_f")[0].phone.value;
		var patt1 = /^([\w-_\.]+)@([\w\.-]{1,40})(\.)([A-z]{1,10})$/;
		var patt2 = /^1\d{10}$/;
		if (!patt1.test(email)) {
			setLog("Email格式错误", false);
		} else if (!patt2.test(phone)) {
			setLog("手机号码格式错误", false);
		} else if (old_email == email) {
			//修改
			$.post("update_userinfo.do", {
				username: $.cookie("username"),
				email: email,
				phone: phone
			}, function(data) {
				if (data.success == true) {
					setLog("修改成功");
				} else {
					setLog("修改失败", false);
				}
			}, "json");
		} else {
			$.post("check_email.do", {
				email: email
			}, function(data) {
				if (data.success == false) {
					//修改
					$.post("update_userinfo.do", {
						username: $.cookie("username"),
						email: email,
						phone: phone
					}, function(data) {
						if (data.success == true) {
							setLog("修改成功");
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

//个人简历
$(function() {
	//添加简历
	$("#addCV_btn").click(function() {
		location.href = "setvitae.jsp";
	});

	//检查是否存在简历
	$.post("check_vitae.do", {
		username: $.cookie("username")
	}, function(data) {
		if (data.success == true) {
			$("#c_cv").addClass("has");
			//加载个人简历
			$.post("load_vitae.do", {
				username: $.cookie("username")
			}, function(data) {
				var str = "<span>" +
					data.name + "</span><span>"
				data.sex + "</span><span>"
				data.age + "</span><span>"
				data.city + "</span><span>"
				data.edu + "</span><span>"
				data.phone + "</span><span>"
				data.email + "</span><span>"
				data.school + "</span><span>"
				data.major + "</span><span>"
				data.job + "</span>";
				$("#cv_i").html(str);
				$("#cv_bars a").attr("href", "showvitae.jsp?id=" + data.vitae_id);
			}, "json");
		}
	}, "json");

	$("#c_cv>.cv").hover(function() {
		$("#cv_bars").animate({
			right: "0px",
		}, 100);
	}, function() {
		$("#cv_bars").animate({
			right: "-146px",
		}, 100);
	});
});

//修改密码
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
			$.post("load_vitae.do", {
				username: $.cookie("username"),
				old_psw: old,
				new_psw: _new
			}, function(data) {
				if (data.success == true) {
					setLog("修改成功");
				} else {
					setLog(data.reason, false);
				}
			}, "json");
		}
	});
});

//加载已投职位信息
$(function() {
	$.post("load_cv_job.do", {
		username: $.cookie("username")
	}, function(data) {
		data = data.list;
		for (var i = 0; i < data.length; i++) {
			var read = "";
			var status = "未读"
			if (data[i].status == 1) {
				read = "read";
				status = "已读";
			}
			var $li = $("<li class='ellipsis " + read + "'></li>");
			var $a = $("<a href='" + data[i].job_id + "'>" + data[i].job_name + "</a>");
			var $span1 = $("<span class='epname'>" + data[i].epname + "</span>");
			var $span2 = $("<span class='status'>" + status + "</span>");
			var $span3 = $("<span class='time'>" + data[i].time + "</span>");
			$li.append($a);
			$li.append($span1);
			$li.append($span2);
			$li.append($span3);
			$("#vote_list").append($li);
		}
	}, "json");
});

//设置header导航激活样式
$("#header_nav").addClass("personal");

//消息提示设置
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

//加载用户基本信息
function loadUserInfo() {
	var e;
	$.post("load_userinfo.do", {
		username: $.cookie("username")
	}, function(data) {
		var f = $("#user_f")[0];
		f.username.value = data.username;
		f.pow.value = data.pow;
		f.email.value = data.email;
		f.phone.value = data.phone;
		e = data.email;
	}, "json");
	return e;
}