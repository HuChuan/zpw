<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>个人中心 - 招聘网</title>
		<link rel="stylesheet" href="css/userspace.css" />
		<link rel="stylesheet" href="css/cropper.min.css" />
	</head>

	<body>
		
		<!--引用header-->
		<%@include file="header.jsp"%>
		
		<div id="content_header" class="container">
			<div id="upload_user_img" class="user_img unuser_select">
				<img id="user_img" src="images/register_bg.jpg"/>
				<label for="upload_img"></label>
				<input id="upload_img" type="file" class="hidden" />
			</div>
			<div class="user_name">
				<span id="username"></span>
			</div>
		</div>
		
		<div id="content" class="container">
			<div class="log">
				<div id="log_info" class="">修改成功</div>
			</div>
			<nav id="content_nav" >
				<div id="nav_info" class="active"><a>基本信息</a></div>
				<div id="nav_cv"><a>个人简历</a></div>
				<div id="nav_psw"><a>修改密码</a></div>
				<div id="nav_job"><a>已投职位</a></div>
				<div id="nav_coll" class="hidden"><a>收藏中心</a></div>
			</nav>
			<!--个人信息-->
			<div id="content_c" class="info">
				<div id="c_info">
					<form id="user_f">
						<div>
							<span>用户名：</span>
							<input name="username" type="text" disabled readonly/>
						</div>
						<div>
							<span>用户身份：</span>
							
							<input name="pow" type="text" disabled readonly/>
						</div>
						<div>
							<span>电子邮箱：</span>
							<input name="email" type="text" readonly/>
						</div>
						<div>
							<span>手机号码：</span>
							<input name="phone" type="text" readonly/>
						</div>
						<div>
							<input id="change_btn" type="button" value="修改资料" />
							<input id="change_sub" type="button" value="确认修改" />
							<input id="change_return" type="button" value="返回" />
						</div>
					</form>
				</div>
				<!--个人简历-->
				<!--class (has)-->
				<div id="c_cv" class="">
					<div class="add">
						<input id="addCV_btn" class="mbutton" type="button" value="添加简历" />
					</div>
					<div class="cv">
						<div id="cv_i" class="ellipsis"></div>
						<div id="cv_bars">
							<a href="showvitae.jsp">查看/修改</a>
						</div>
					</div>
				</div>
				<!--修改密码-->
				<div id="c_psw">
					<form id="psw_f">
						<input type="password" id="old_psw" placeholder="请输入原密码" />
						<input type="password" id="new_psw" placeholder="请输入新密码" />
						<input type="password" id="re_new_psw" placeholder="请确认密码" />
						<input type="button" id="psw_btn" class="mbutton" value="修改密码" />
					</form>
				</div>
				<!--已投职位-->
				<div id="c_job">
					<ul id="vote_list" class="unlist"></ul>
				</div>
			</div>
			
		</div>
		
		<script src="js/ajaxfileupload.js"></script>
		<script src="js/userspace.js"></script>
		<script src="layer/layer.js"></script>
		<script src="js/cropper.min.js"></script>
		<script src="js/upload_img.js"></script>
	</body>

</html>