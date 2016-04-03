//加载数据
$(function() {
	var search = location.search;
	var id = search.substr(search.indexOf("id=") + 3);
	$.get("load_enterprise_info.do", {
		id: id
	}, function(data) {
		data = data.enterprise;
		$("head title").html(data.name + "的企业信息 - 招聘网");
		$("#h_ep_name").text(data.name);
		$("#ep_name").text(data.name);
		$("#ep_type").text(data.type);
		$("#ep_web").text(data.web);
		$("#ep_address").text(data.address);
		$("#ep_scale").text(data.scale);
		$("#ep_slogan").text(data.slogan);
		$("#ep_intro").text(data.intro);
		$("#user_img").attr("src", data.img);
	}, "json");
});