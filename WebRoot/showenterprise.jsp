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
				<span id="h_ep_name">腾讯公司</span>
			</div>
		</div>
		
		<div id="content" class="container">
			<div>
				<span class="tags">企业名称：</span>
				<p id="ep_name">腾讯公司</p>
			</div>
			<div>
				<span class="tags">企业类型：</span>
				<p id="ep_type">互联网</p>
			</div>
			<div>
				<span class="tags">企业官网：</span>
				<p id="ep_web">www.qq.com</p>
			</div>
			<div>
				<span class="tags">企业地址：</span>
				<p id="ep_address">中国重庆21号</p>
			</div>
			<div>
				<span class="tags">企业规模：</span>
				<p id="ep_scale">2000人<br></p>
			</div>
			<div>
				<span class="tags">企业口号：</span>
				<p id="ep_slogan">加油，加油</p>
			</div>
			<div>
				<span class="tags">企业简介：</span>
				<p id="ep_intro">这是一家很大的公司，2000人，哈哈哈这是一家很大的公司，2000人，哈哈哈这是一家很大的公司，2000人，哈哈哈这是一家很大的公司，2000人，哈哈哈这是一家很大的公司，2000人，哈哈哈这是一家很大的公司，2000人，哈哈哈这是一家很大的公司，2000人，哈哈哈</p>
			</div>
		</div>	
			
		<script src="js/ajaxfileupload.js"></script>		
		<script src="js/showenterprise.js"></script>
	</body>

</html>