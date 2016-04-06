<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>添加简历 - 招聘网</title>
		<link rel="stylesheet" href="css/setvitae.css" />
	</head>

	<body>
		
		<!--引用header-->
		<%@include file="header.jsp"%>
		
		<div class="container">
			<form id="vitae_f" class="">
				<h2>添加简历</h2>				
				<div>
					<span class="tags">真实姓名</span>
					<input type="text" name="name" autocomplete="off" />
				</div>
				<div>
					<span class="tags">性别</span>
					<select name="sex">
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
				</div>
				<div>
					<span class="tags">年龄</span>
					<input type="text" name="age" autocomplete="off" />
				</div>
				<div>
					<span class="tags">城市</span>
					<input type="text" name="city" autocomplete="off" />
				</div>
				<div>
					<span class="tags">学历</span>
					<input type="text" name="edu" autocomplete="off" />
				</div>
				<div>
					<span class="tags">毕业学校</span>
					<input type="text" name="school" autocomplete="off" />
				</div>
				<div>
					<span class="tags">专业</span>
					<input type="text" name="major" autocomplete="off" />
				</div>
				<div>
					<span class="tags">毕业年份</span>
					<select name="grad_year">
					</select>
				</div>
				<div>
					<span class="tags">手机号码</span>
					<input type="text" name="phone" autocomplete="off" />
				</div>
				<div>
					<span class="tags">Email</span>
					<input type="text" name="email" autocomplete="off" />
				</div>
				<div>
					<span class="tags">期望职位</span>
					<input type="text" name="job" autocomplete="off" />
				</div>
				<div>
					<span class="tags">期望工作城市</span>
					<input type="text" name="job_city" autocomplete="off" />
				</div>
				<div>
					<span class="tags">期望月薪</span>
					<input type="text" name="money" autocomplete="off" />
				</div>
				<div>
					<span class="tags text">专业技能</span>
					<textarea name="skill"></textarea>
				</div>
				
				<div>
					<span class="tags text">工作经历</span>
					<textarea name="experience"></textarea>
				</div>
				<div>
					<span class="tags text">兴趣爱好</span>
					<textarea name="interest"></textarea>
				</div>
				
				<div>
					<span class="tags text">个人评价</span>
					<textarea name="personal"></textarea>
				</div>
				<div>
					<span class="tags"></span>
					<input class="mbutton" type="button" id="addCV_sub" value="添加简历" />
					<input class="mbutton" type="button" id="updateCV_btn" value="修改简历" />
				</div>
				<input type="hidden" name="username" value="" />
				<input type="hidden" name="user_img" value="" />
			</form>
		</div>
		
		<!--消息通知-->
		<div id="Logs">
			<div id="log_info" class=""></div>
		</div>
		
		<script src="js/setvitae.js"></script>
	</body>

</html>