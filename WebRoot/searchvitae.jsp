<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>发现人才 - 招聘网</title>
		<link rel="stylesheet" href="css/searchvitae.css" />
	</head>

	<body>
		
		<!--引用header-->
		<%@include file="header.jsp"%>
		
		<div class="container">
			<form id="search_f" action="searchjob.jsp" method="get">
				<input id="search_kw" type="text" name="kw" placeholder="请输入关键字" />
				<input type="submit" value="搜索简历" />
			</form>
		</div>
		
		<div class="container">
			<div id="search_filter">
				<h3>筛选</h3>
				<div>
					<div>
						<span class="tags">TA的城市：</span>
						<select id="city_filter"></select>
					</div>
					<div>
						<span class="tags">TA的学历：</span>
						<select id="edu_filter">
							<option>不限</option>
							<option>本科</option>
							<option>硕士</option>
							<option>博士</option>
							<option>专科</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		
		<div class="container">
			<ul id="search_list" class="unlist">
				
				<li>
					<div>
						<p><a class="cv_name" href="">陈杰</a></p>
						<p>JAVA开发工程师</p>
						<p>
							<span class="city">城市城市城市城市城市城市城市</span>
							<span class="edu">本科</span>
							<span class="major">软件工程专业</span>
						</p>
					</div>
					<img src="images/source/ep3.jpg" />
				</li>
			</ul>
			
			<div id="load_more" class="">正在加载中...</div>
			
			
		</div>

		<!--返回顶部-->
		<input id="top_btn" type="button" />
		
		<!-- 引用footer -->
		<%@include file="footer.jsp"%>
		
		<script src="js/area_list.js"></script>
		<script src="js/searchvitae.js"></script>
	</body>

</html>