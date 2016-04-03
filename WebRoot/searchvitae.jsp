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
			<form id="search_f" action="searchvitae.jsp" method="get">
				<input id="search_kw" type="text" name="kw" placeholder="请输入TA的期望职位" />
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
			<ul id="search_list" class="unlist"></ul>
			<div id="load_more" class="unuser_select">正在加载中...</div>
		</div>

		<!--返回顶部-->
		<input id="top_btn" type="button" />
		
		<!-- 引用footer -->
		<%@include file="footer.jsp"%>
		
		<script src="js/area_list.js"></script>
		<script src="js/searchvitae.js"></script>
	</body>

</html>