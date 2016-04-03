<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>职位信息 - 招聘网</title>
		<link rel="stylesheet" href="css/showjob.css" />
	</head>

	<body>
		
		<!--引用header-->
		<%@include file="header.jsp"%>
		
		<div id="content_header" class="container">
			<div id="upload_user_img" class="user_img unuser_select">
				<img id="user_img" src="images/register_bg.jpg"/>
			</div>
			<div class="user_name">
				<span id="h_ep_name">腾讯公司</span>
			</div>
		</div>
		
		<div id="content" class="container">
			<div>
				<span class="tags">企业名称：</span>
				<p id="job_name">腾讯公司</p>
			</div>
			<div>
				<span class="tags">企业类型：</span>
				<p id="job_city">互联网</p>
			</div>
			<div>
				<span class="tags">企业官网：</span>
				<p id="job_edu">www.qq.com</p>
			</div>
			<div>
				<span class="tags">企业地址：</span>
				<p id="job_exp">中国重庆21号</p>
			</div>
			<div>
				<span class="tags">企业规模：</span>
				<p id="job_money">2000人<br></p>
			</div>
			<div>
				<span class="tags">企业口号：</span>
				<p id="job_intro">很好的工作</p>
			</div>
			<div>
				<span class="tags">企业简介：</span>
				<p id="job_time">2016-12-02</p>
			</div>
		</div>	
				
		<script src="js/showjob.js"></script>
	</body>

</html>