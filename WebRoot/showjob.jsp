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
				<span id="ep_name">腾讯公司</span>
			</div>
		</div>
		
		<div id="content" class="container">
			<div class="log">
				<div id="log_info" class="">修改成功</div>
			</div>
			<div>
				<span class="tags">职位名称：</span>
				<p id="job_name">JAVA开发工程师</p>
			</div>
			<div>
				<span class="tags">工作城市：</span>
				<p id="job_city">重庆</p>
			</div>
			<div>
				<span class="tags">学历要求：</span>
				<p id="job_edu">本科</p>
			</div>
			<div>
				<span class="tags">经验要求：</span>
				<p id="job_exp">2年</p>
			</div>
			<div>
				<span class="tags">工作月薪：</span>
				<p id="job_money">2000<br></p>
			</div>
			<div>
				<span class="tags">职位介绍：</span>
				<p id="job_intro">很好的工作，很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作很好的工作，1</p>
			</div>
			<div>
				<span class="tags">发布时间：</span>
				<p id="job_time">2016-12-02</p>
			</div>
			
			<input id="apply" value="投递简历" type="button" class="mbutton" />
		</div>	
				
		<script src="js/showjob.js"></script>
	</body>

</html>