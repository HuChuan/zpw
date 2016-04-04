<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>个人中心 - 招聘网</title>
		<link rel="stylesheet" href="css/enterprise.css" />
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
				<div id="nav_ep"><a>企业信息</a></div>
				<div id="nav_psw"><a>修改密码</a></div>
				<div id="nav_job"><a>职位管理</a></div>
				<div id="nav_vitae"><a>收到的简历</a></div>
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
				<!--企业信息-->
				<div id="c_ep" class="">
					<div class="add">
						<div class="add">
							<input id="addEP_btn" class="mbutton" type="button" value="添加企业信息" />
						</div>
					</div>
					<form id="ep_f" class="">
						<div>
							<span>企业名称：</span>
							<input name="name" type="text" readonly/>
						</div>
						<div>
							<span>企业类型：</span>
							<input name="type" type="text" readonly/>
						</div>
						<div>
							<span>企业官网：</span>
							<input name="web" type="text" readonly/>
						</div>
						<div>
							<span>企业地址：</span>
							<input name="address" type="text" readonly/>
						</div>
						<div>
							<span>企业规模：</span>
							<input name="scale" type="text" readonly/>
						</div>
						<div>
							<span>企业口号：</span>
							<input name="slogan" type="text" readonly/>
						</div>
						<div>
							<span>企业简介：</span>
							<textarea name="intro" readonly></textarea>
						</div>
						<div>
							<input id="change_ep_btn" type="button" class="mbutton" value="修改资料" />
							<input id="change_ep_sub" type="button" class="mbutton" value="确认修改" />
							<input id="change_ep_return" type="button" class="mbutton" value="返回" />
						</div>
						<input type="hidden" name="username" value="" />
					</form>
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
				<!--职位管理-->
				<div id="c_job">
					<div class="add">
						<input type="button" id="addJOB_btn" class="mbutton" value="添加职位" />
					</div>
					<ul id="job_list" class="unlist"></ul>
				</div>
				<!--收到的简历-->
				<div id="c_vitae">
					<ul id="vitae_list" class="unlist"></ul>
				</div>
			</div>
		</div>
		
		<!--弹出职位窗口-->
		<div id="_window">
			<div class="content">
				<span id="close_window"></span>
				<form id="addJOB_f" class="">
					<h2>发布职位</h2>
					<div>
						<span>职位名称：</span>
						<input name="name" type="text" value=""/>
					</div>
					<div>
						<span>工作城市：</span>
						<input name="city" type="text" value=""/>
					</div>
					<div>
						<span>学历要求：</span>
						<input name="edu" type="text" value=""/>
					</div>
					<div>
						<span>经验要求：</span>
						<input name="exp" type="text" value=""/>
					</div>
					<div>
						<span>薪酬：</span>
						<input name="money" type="text" value=""/>
					</div>
					<div>
						<span>职位描述：</span>
						<textarea name="intro"></textarea>
					</div>
					<div>
						<input id="addJOB_sub" type="button" class="mbutton" value="发布职位信息" />
						<input id="updateJOB_sub" type="button" class="mbutton" value="修改职位信息" />
						<input id="delJOB_sub" type="button" class="mbutton" value="删除" />
					</div>
					<input type="hidden" name="job_id" value="" />
					<input type="hidden" name="username" value="" />
				</form>
			</div>
		</div>

		<script src="js/enterprise.js"></script>
	</body>

</html>