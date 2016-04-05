//加载并判断判断是否是自己的简历
var _user;
$(function() {
	var search = location.search;
	_user = search.substr(search.indexOf("username=") + 9);
	loadCV();
	$("head title").html(_user + " 的简历信息 - 招聘网");
	if (_user == $.cookie("username")) {
		$("#vitae_f").addClass("mine");
	}
});

// 修改简历
$(function() {
	var f = $("#vitae_f")[0];
	$("#updateCV_btn").click(function() {
		location.href = "setvitae.jsp?change=true";
	});
});

// 加载简历
function loadCV() {
	var _id;
	$.post("load_vitae.do", {
		username : _user
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
		$("#skill").text(data.skill);
		$("#experience").text(data.experience);
		$("#interest").text(data.interest);
		$("#personal_c").text(data.personal);
		if (data.user_img == null || data.user_img.trim() != "") {
			$img = $("<img src='" + data.user_img + "' />");
			$("#user_img").append($img);
		}
		_id = data.id;
		// 更新hr查看简历状态
		if ($.cookie("pow") == 2) {
			$.post("check_apply_job.do", {
				username : $.cookie("username"),
				id : _id
			}, function(data) {
				if (data.success == true) {
					$.get("update_cv_job_status.do", {
						username : _user,
						ep_username : $.cookie("username")
					});
				}
			}, "json");
		}
	}, "json");
}