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
							<input name="username" type="text" value="chen" disabled readonly/>
						</div>
						<div>
							<span>用户身份：</span>
							
							<input name="pow" type="text" value="普通会员" disabled readonly/>
						</div>
						<div>
							<span>电子邮箱：</span>
							<input name="email" type="text" value="1582674@qq.com" readonly/>
						</div>
						<div>
							<span>手机号码：</span>
							<input name="phone" type="text" value="18883843195" readonly/>
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
							<input name="ep_name" type="text" value="联想公司" readonly/>
						</div>
						<div>
							<span>企业类型：</span>
							<input name="ep_type" type="text" value="电子数码" readonly/>
						</div>
						<div>
							<span>企业官网：</span>
							<input name="ep_web" type="text" value="www.lozzweb.com" readonly/>
						</div>
						<div>
							<span>企业地址：</span>
							<input name="ep_address" type="text" value="重庆南岸区3号" readonly/>
						</div>
						<div>
							<span>企业规模：</span>
							<input name="ep_scale" type="text" value="300人" readonly/>
						</div>
						<div>
							<span>企业口号：</span>
							<input name="ep_slogan" type="text" value="加油！come on" readonly/>
						</div>
						<div>
							<span>企业简介：</span>
							<textarea name="ep_intro" readonly>153</textarea>
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
					<ul id="job_list" class="unlist">
						<li class="ellipsis">
							<input type="button" job_id="12" class="mbutton" value="查看/修改" />
							<a href="">java开发工程师</a>
							<span class="city">重庆</span>
							<span class="time">2015-12-12</span>
						</li>
						<li class="ellipsis">
							<input type="button" job_id="12" class="mbutton" value="查看/修改" />
							<a href="">android开发工程师</a>
							<span class="city">成都</span>
							<span class="time">2015-12-12</span>
						</li>
					</ul>
				</div>
				<!--收到的简历-->
				<div id="c_vitae">
					<ul id="vitae_list" class="unlist">
						<li class="ellipsis">
							<input type="button" class="mbutton" value="查看简历" />
							<span>陈杰</span>
							<span>男</span>
							<span>19</span>
							<span>本科</span>
							<span>JAVA开发工程师</span>
							<span>2015-12-12</span>
							
						</li>
						<li class="ellipsis">
							<input type="button" class="mbutton" value="查看简历" />
							<span>陈杰</span>
							<span>男</span>
							<span>22</span>
							<span>本科</span>
							<span>android测试</span>
							<span>2016-12-30</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<!--弹出窗口-->
		<div id="_window">
			<div class="content">
				<span id="close_window"></span>
				<form id="addJOB_f" class="">
					<h2>发布职位</h2>
					<div>
						<span>职位名称：</span>
						<input name="job_name" type="text" value=""/>
					</div>
					<div>
						<span>工作城市：</span>
						<input name="job_city" type="text" value=""/>
					</div>
					<div>
						<span>学历要求：</span>
						<input name="job_edu" type="text" value=""/>
					</div>
					<div>
						<span>经验要求：</span>
						<input name="job_exp" type="text" value=""/>
					</div>
					<div>
						<span>薪酬：</span>
						<input name="job_money" type="text" value=""/>
					</div>
					<div>
						<span>职位描述：</span>
						<textarea name="job_intro"></textarea>
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
		
		<script src="js/ajaxfileupload.js"></script>
		<script src="js/enterprise.js"></script>
	</body>

</html>