<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>的简历信息 - 招聘网</title>
<link rel="stylesheet" href="css/showvitae.css" />
</head>

<body>

	<!--引用header-->
	<%@include file="header.jsp"%>

	<div class="container">
		<form id="vitae_f" class="">
			<h2>简历</h2>
			<div id="user_img"><img src="images/user_default.png" /></div>

			<div>
				<span class="tags">真实姓名：</span> <input type="text" name="name"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">性别：</span> <input type="text" name="sex"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">年龄：</span> <input type="text" name="age"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">城市：</span> <input type="text" name="city"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">学历：</span> <input type="text" name="edu"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">毕业学校：</span> <input type="text" name="school"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">专业：</span> <input type="text" name="major"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">毕业年份：</span> <input type="text" name="grad_year"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">手机号码：</span> <input type="text" name="phone"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">Email：</span> <input type="text" name="email"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">期望职位：</span> <input type="text" name="job"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">期望工作城市：</span> <input type="text" name="job_city"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags">期望月薪：</span> <input type="text" name="money"
					autocomplete="off" disabled />
			</div>
			<div>
				<span class="tags text">专业技能：</span>
				<div id="skill" class="textarea"></div>
			</div>

			<div>
				<span class="tags text">工作经历：</span>
				<div id="experience" class="textarea"></div>
			</div>
			<div>
				<span class="tags text">兴趣爱好：</span>
				<div id="interest" class="textarea"></div>
			</div>

			<div>
				<span class="tags text">个人评价：</span>
				<div id="personal_c" class="textarea"></div>
			</div>
			<div>
				<span class="tags"></span> <input class="mbutton" type="button"
					id="updateCV_btn" value="修改我的简历" />
			</div>
		</form>
	</div>

	<script src="js/showvitae.js"></script>
</body>

</html>