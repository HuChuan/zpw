<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>注册 - 招聘网</title>
		<link rel="stylesheet" href="css/register.css" />
	</head>

	<body>

		<!--引用header-->
		<%@include file="header.jsp"%>
			
		<form id="regist_f" class="container">
			<div class="form_header_nav">
				<span class="_box"></span>
				<span class="active unuser_select">注册</span>
				<a href="login.jsp">已有账号，直接登录</a>
			</div>
			<div id="regist_log"></div>
			<div class="form_content">
				<div>
					<p class="form_log"></p>
					<p class="tags">用户名</p>
					<p><input type="text" name="username" id="username" autocomplete="off"></p>
				</div>
				<div>
					<p class="form_log"></p>
					<p class="tags">密码</p>
					<p><input type="password" name="password" id="psw"></p>
				</div>
				<div>
					<p class="form_log"></p>
					<p class="tags">确认密码</p>
					<p><input type="password" id="repsw"></p>
				</div>
				<div>
					<p class="form_log"></p>
					<p class="tags">Email</p>
					<p><input type="text" id="email" name="email" autocomplete="off"></p>
				</div>
				<div>
					<p class="tags"></p>
					<p>
						<label id="radio_per" for="kind_per" class="unuser_select"><span id="per_bg" class="active"></span>个人用户</label>
						<label id="radio_ep" for="kind_ep" class="unuser_select"><span id="ep_bg"></span>企业用户</label>
						<input type="radio" name="pow" id="kind_per" class="hidden" checked="checked" value="1">
						<input type="radio" name="pow" id="kind_ep" class="hidden" value="2">
					</p>
				</dt>
				<div>
					<p class="tags"></p>
					<p><input type="submit" id="form_sub" value="注 册"></p>
				</dt>
			</dl>
		</form>
		
		<script src="js/register.js"></script>
	</body>

</html>