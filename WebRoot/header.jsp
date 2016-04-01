<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<link rel="stylesheet" type="text/css" href="css/header.css"/>
<div id="header">
	<div id="header_content" class="container">
		<a href="index.jsp">招聘网</a>
		<!--
			1.添加a的id到ul的class，实现选中效果
			2.添加cmuser epuser admin到ul的class
		-->
		<ul id="header_nav" class="unlist">
			<li><a id="index" href="index.jsp">首页</a></li>
			<li><a id="find_job" href="">找工作</a></li>
			<li><a id="find_man" href="">发现人才</a></li>
			<li><a id="personal" href="userspace.jsp">个人中心</a></li>
			<li><a id="admin" href="" class="hidden">后台管理</a></li>
		</ul>
		<!--
			添加.login到ul的class，登录效果
		-->
		<ul id="header_info" class="unlist">
			<li><a href="login.jsp">登录</a></li>
			<li><a href="register.jsp">注册</a></li>
			<li class="user">
				<a id="user" href="userspace.jsp"></a>
				<a id="exit" href="javascript:logout();">退出</a>
				<span id="new_mess_dot" class="hidden"></span>
			</li>
		</ul>
	</div>
</div>
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/jquery.cookie.js"></script>
<script src="js/header.js" type="text/javascript"></script>