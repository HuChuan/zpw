<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>企业信息 - 招聘网</title>
		<link rel="stylesheet" href="css/showenterprise.css" />
	</head>

	<body>
		
		<!--引用header-->
		<%@include file="header.jsp"%>
		
		<div id="content_header" class="container">
			<div id="upload_user_img" class="user_img unuser_select">
				<img id="user_img" src="images/register_bg.jpg"/>
			</div>
			<div class="user_name">
				<span id="h_ep_name"></span>
			</div>
		</div>
		
		<div id="content" class="container">
			<div>
				<span class="tags">企业名称：</span>
				<p id="ep_name"></p>
			</div>
			<div>
				<span class="tags">企业类型：</span>
				<p id="ep_type"></p>
			</div>
			<div>
				<span class="tags">企业官网：</span>
				<p id="ep_web"></p>
			</div>
			<div>
				<span class="tags">企业地址：</span>
				<p id="ep_address"></p>
			</div>
			<div>
				<span class="tags">企业规模：</span>
				<p id="ep_scale"></p>
			</div>
			<div>
				<span class="tags">企业口号：</span>
				<p id="ep_slogan"></p>
			</div>
			<div>
				<span class="tags">企业简介：</span>
				<p id="ep_intro"></p>
			</div>
		</div>	
		
		<script src="js/showenterprise.js"></script>
	</body>

</html>