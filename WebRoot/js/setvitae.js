//判断是否登录
$(function() {
	if ($.cookie("username") == null || $.cookie("username") == ""
			|| $.cookie("token") == null || $.cookie("token") == ""
			|| $.cookie("pow") != "1") {
		// location.href = "login.jsp";
	} else {
		$("#vitae_f input[name='username']").val($.cookie("username"));
	}
});

// 判断是修改还是添加
$(function() {
	var search = location.search;
	if (search.indexOf("change") > 0) {
		loadCV();
		$("head title").html("修改简历 - 招聘网");
		$("#vitae_f").addClass("change");
		$("#vitae_f>h2").text("修改简历");
	}
});

/* 毕业年份注入 */
$(function() {
	var now_y = new Date().getFullYear();
	var form_y = 1980;
	var sel = $("#vitae_f")[0].grad_year;
	for (var i = now_y; i >= form_y; i--) {
		$op = $("<option value='" + i + "'>" + i + "</option>");
		$(sel).append($op);
	}
});

// 添加简历
$(function() {
	var f = $("#vitae_f")[0];
	$("#addCV_sub").click(function() {
		if (f.name.value.trim().length == 0) {
			setLog("真实姓名不能为空",false);
		} else if (f.age.value.trim().length == 0) {
			setLog("年龄不能为空",false);
		} else if (f.city.value.trim().length == 0) {
			setLog("居住城市不能为空",false);
		} else if (f.edu.value.trim().length == 0) {
			setLog("学历不能为空",false);
		} else if (f.school.value.trim().length == 0) {
			setLog("毕业学校不能为空",false);
		} else if (f.major.value.trim().length == 0) {
			setLog("专业不能为空",false);
		} else if (f.phone.value.trim().length == 0) {
			setLog("手机号码不能为空",false);
		} else if (f.email.value.trim().length == 0) {
			setLog("Email不能为空",false);
		} else if (f.job.value.trim().length == 0) {
			setLog("期望职位不能为空",false);
		} else {
			var d = $("#vitae_f").serialize();
			$.post("add_vitae.do", d, function(data) {
				if (data.success == true) {
					setLog("添加成功,正在转到个人中心");
					setTimeout(function() {
						location.href = "userspace.jsp";
					}, 1990);
				} else {
					setLog("添加失败", false);
				}
			}, "json");
		}
	});
});

// 修改简历
$(function() {
	var f = $("#vitae_f")[0];
	$("#updateCV_btn").click(function() {
		if (f.name.value.trim().length == 0) {
			setLog("真实姓名不能为空",false);
		} else if (f.age.value.trim().length == 0) {
			setLog("年龄不能为空",false);
		} else if (f.city.name.trim().length == 0) {
			setLog("居住城市不能为空",false);
		} else if (f.edu.value.trim().length == 0) {
			setLog("学历不能为空",false);
		} else if (f.school.value.trim().length == 0) {
			setLog("毕业学校不能为空",false);
		} else if (f.major.value.trim().length == 0) {
			setLog("专业不能为空",false);
		} else if (f.phone.value.trim().length == 0) {
			setLog("手机号码不能为空",false);
		} else if (f.email.value.trim().length == 0) {
			setLog("Email不能为空",false);
		} else if (f.job.value.trim().length == 0) {
			setLog("期望职位不能为空",false);
		} else {
			var d = $("#vitae_f").serialize();
			$.post("update_vitae.do", d, function(data) {
				if (data.success == true) {
					setLog("修改成功");
				} else {
					setLog("修改失败", false);
				}
			}, "json");
		}
	});
});

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

// 加载简历
function loadCV() {
	$.post("load_vitae.do", {
		username : $.cookie("username")
	}, function(data) {
		var f = $("#vitae_f")[0];
		f.name.value = data.name;
		f.sex.value = data.sex;
		f.age.value = data.age;
		f.city.value = data.city;
		f.edu.value = data.edu;
		f.school.value = data.school;
		f.major.value = data.major;
		f.grad_year.value = data.grad_year;
		f.phone.value = data.phone;
		f.email.value = data.email;
		f.job.value = data.job;
		f.job_city.value = data.job_city;
		f.money.value = data.money;
		f.skill.value = data.skill;
		f.experience.value = data.experience;
		f.interest.value = data.interest;
		f.personal.value = data.personal;
		f.user_img.value = data.user_img;
	}, "json");
}