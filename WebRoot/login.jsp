<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>登录 - 招聘网</title>
		<link rel="stylesheet" href="css/login.css" />
	</head>

	<body>

		<!--引用header-->
		<%@include file="header.jsp"%>
			
		<form id="login_f" class="container">
			<div class="form_header_nav">
				<span class="_box"></span>
				<span class="active unuser_select">登录</span>
				<a href="register.jsp">没有账号，去注册</a>
				<a class="find hidden" href="">找回密码</a>
			</div>
			<div id="login_log"></div>
			<div class="form_content">
				<div>
					<p class="form_log"></p>
					<p><input type="text" id="username" name="username" autocomplete="off" placeholder="用户名/EMAIL"></p>
				</div>
				<div>
					<p class="form_log"></p>
					<p><input type="password" id="psw" name="password" placeholder="密码"></p>
				</div>
				<div>
					<p>
						<input type="checkbox" class="hidden" id="auto_login">
						<label id="checkbox_box" for="auto_login" class="unuser_select"><span id="checkbox_bg"></span>自动登录
						</label>
					</p>
				</div>
				
				<div>
					<p><input type="submit" id="form_sub" value="登 录"></p>
				</div>
			</div>
		</form>

		<script src="js/login.js"></script>
	</body>

</html>