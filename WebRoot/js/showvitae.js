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
			$("#user_img>img").attr("src",data.user_img);
		}
		
	}, "json");
}