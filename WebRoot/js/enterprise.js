//判断是否登录
$(function() {
	if ($.cookie("username") == null || $.cookie("username") == "" || $.cookie("token") == null || $.cookie("token") == "" || $.cookie("pow") != "1") {
		//location.href = "login.jsp";
		$("#ep_f input[name='username']").val($.cookie("username"));
		$("#addJOB_f input[name='username']").val($.cookie("username"));
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
	loadUserInfo();
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
		} else {
			$.post("check_email.do", {
				email: email
			}, function(data) {
				if (data.success == false) {
					//修改
					$.post("update_userinfo.do", {
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

//企业信息
$(function() {
	$("#change_ep_btn").click(function() {
		$("#ep_f").addClass("change");
		$("#ep_f").find("input[type='text']").each(function() {
			this.readOnly = false;
		});
		$("#ep_f textarea")[0].readOnly = false;
	});
	$("#change_ep_return").click(function() {
		loadEPInfo();
		$("#ep_f").removeClass("change");
		$("#ep_f").find("input[type='text']").each(function() {
			this.readOnly = true;
		});
		$("#ep_f textarea")[0].readOnly = true;
	});
	//检查是否存在企业信息
	$.post("check_enterprise.do", {
		username: $.cookie("username")
	}, function(data) {
		if (data.success == true) {
			$("#c_ep").addClass("has");
			//加载企业信息
			loadEPInfo();
		}
	}, "json");
	//修改信息
	$("#change_ep_sub").click(function() {
		var ep = $("#ep_f")[0];
		if (ep.ep_name.value.trim().length == 0) {
			setLog("企业名称不能为空", false);
		} else if (ep.ep_type.value.trim().length == 0) {
			setLog("企业类型不能为空", false);
		} else if (ep.ep_address.value.trim().length == 0) {
			setLog("企业地址不能为空", false);
		} else if (ep.ep_scale.value.trim().length == 0) {
			setLog("企业规模不能为空", false);
		} else {
			var d = $("ep_f").serialize();
			$.post("check_enterprise.do", d, function(data) {
				if (data.success == true) {
					setLog("修改成功");
				} else {
					setLog("修改失败", false);
				}
			}, "json");
		}
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

//职位管理
$(function() {
	$("#addJOB_btn").click(function() {
		addJOB();
	});
	//加载发布的职位信息列表
	$.post("load_job_list.do", {
		username: $.cookie("username")
	}, function(data) {
		data = data.list;
		for (var i = 0; i < data.length; i++) {
			var $li = $("<li class='ellipsis'></li>");
			var $a = $("<a href='" + data[i].id + "'>" + data[i].name + "</a>");
			var $span1 = $("<span class='city'>" + data[i].city + "</span>");
			var $span2 = $("<span class='time'>" + data[i].time + "</span>");
			var $input = $('<input type="button" class="mbutton" value="查看/修改" />');
			$input.addEventListener("click", function() {
				addJOB(data[i].id);
			});
			$li.append($input);
			$li.append($a);
			$li.append($span1);
			$li.append($span2);
			$("#job_list").append($li);
		}
	}, "json");
});

//收到的简历
$(function() {
	$.post("load_vitae.do", {
		username: $.cookie("username")
	}, function(data) {
		data = data.list;
		for (var i = 0; i < data.length; i++) {
			var $li = $("<li class='ellipsis'></li>");
			var $span1 = $("<span>" + data[i].name + "</span>");
			var $span1 = $("<span>" + data[i].sex + "</span>");
			var $span1 = $("<span>" + data[i].age + "</span>");
			var $span1 = $("<span>" + data[i].edu + "</span>");
			var $span1 = $("<span>" + data[i].job + "</span>");
			var $span1 = $("<span>" + data[i].time + "</span>");
			var $input = $('<input type="button" class="mbutton" value="查看简历" />');
			$li.append($input);
			$li.append($span1);
			$li.append($span2);
			$li.append($span3);
			$li.append($span4);
			$li.append($span5);
			$li.append($span6);
			$("#vitae_list").append($li);
		}
	}, "json");
});

// 发布/修改信息窗口
$(function() {
	$("#close_window").click(function() {
		$("#_window").fadeOut(200);
	});
	//发布职位
	$("#addJOB_sub").click(function() {
		var f = $("#addJOB_f")[0];
		if (f.job_name.value.trim().length == 0) {
			setLog("职位名称不能为空", false);
		} else if (f.job_city.value.trim().length == 0) {
			setLog("工作城市不能为空", false);
		} else if (f.job_edu.value.trim().length == 0) {
			setLog("学历要求不能为空", false);
		} else if (f.job_exp.value.trim().length == 0) {
			setLog("经验要求不能为空", false);
		} else if (f.job_money.value.trim().length == 0) {
			setLog("薪酬不能为空", false);
		} else if (f.job_intro.value.trim().length == 0) {
			setLog("职位描述不能为空", false);
		} else {
			var d = $("#addJOB_f").serialize();
			$.post("add_job_info.do", d, function(data) {
				if (data.success == true) {
					setLog("发布成功");
					$("#addJOB_sub input[type='text']").val("");
					$("#addJOB_sub textarea").val("");
				} else {
					setLog("发布失败！请重试", false);
				}
			}, "json");
		}
	});
	//修改职位
	$("#updateJOB_sub").click(function() {
		var f = $("#addJOB_f")[0];
		if (f.job_name.value.trim().length == 0) {
			setLog("职位名称不能为空", false);
		} else if (f.job_city.value.trim().length == 0) {
			setLog("工作城市不能为空", false);
		} else if (f.job_edu.value.trim().length == 0) {
			setLog("学历要求不能为空", false);
		} else if (f.job_exp.value.trim().length == 0) {
			setLog("经验要求不能为空", false);
		} else if (f.job_money.value.trim().length == 0) {
			setLog("薪酬不能为空", false);
		} else if (f.job_intro.value.trim().length == 0) {
			setLog("职位描述不能为空", false);
		} else {
			var d = $("#addJOB_f").serialize();
			$.post("update_job_info.do", d, function(data) {
				if (data.success == true) {
					setLog("修改成功");
					$("#addJOB_sub input[type='text']").val("");
					$("#addJOB_sub textarea").val("");
				} else {
					setLog("修改失败！请重试", false);
				}
			}, "json");
		}
	});
	//删除职位
	$("#delJOB_sub").click(function() {
		$.post("delete_job_info.do", {
			id: $("#addJOB_f")[0].job_id.value
		}, function(data) {
			if (data.success == true) {
				setLog("删除成功");
				$("#_window").fadeOut(200);
			} else {
				setLog("删除失败！请重试", false);
			}
		}, "json");
	});

});

//设置header导航激活样式
$("#header_nav").addClass("personal");

//消息提示设置
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

//加载用户基本信息
function loadUserInfo() {
	$.post("load_userinfo.do", {
		username: $.cookie("username")
	}, function(data) {
		var f = $("#user_f")[0];
		f.username.value = data.username;
		f.pow.value = data.pow;
		f.email.value = data.email;
		f.phone.value = data.phone;
	}, "json");
}

//加载企业信息
function loadEPInfo() {
	$.post("load_enterprise.do", {
		username: $.cookie("username")
	}, function(data) {
		var f = $("#ep_f")[0];
		f.ep_name.value = data.ep_name;
		f.ep_type.value = data.ep_type;
		f.ep_web.value = data.ep_web;
		f.ep_address.value = data.ep_address;
		f.ep_scale.value = data.ep_scale;
		f.ep_slogan.value = data.ep_slogan;
		f.ep_intro.value = data.ep_intro;
	}, "json");
}

// 弹出添加/修改职位窗口
//flag为true表示添加职位
function addJOB(id) {
	if (!id) {
		$("#addJOB_f").removeClass("has");
		$("#addJOB_f>h2").text("发布职位");
	} else {
		$("#addJOB_f").addClass("has");
		$("#addJOB_f>h2").text("修改职位");
		//加载职位信息
		$.post("load_job_info.do", {
			id: id
		}, function(data) {
			var f = $("#addJOB_f")[0];
			f.job_id = data.id;
			f.job_name = data.name;
			f.job_city = data.city;
			f.job_edu = data.edu;
			f.job_exp = data.exp;
			f.job_money = data.money;
			f.job_intro = data.intro;
		}, "json");
	}
	$("#_window").fadeIn(200);
}