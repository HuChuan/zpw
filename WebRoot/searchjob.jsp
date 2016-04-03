<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>找工作 - 招聘网</title>
		<link rel="stylesheet" href="css/searchjob.css" />
	</head>

	<body>
		
		<!--引用header-->
		<%@include file="header.jsp"%>
		
		<div class="container">
			<form id="search_f" action="searchjob.jsp" method="get">
				<input id="search_kw" type="text" name="kw" placeholder="请输入职位名称" />
				<input type="submit" value="搜索职位" />
			</form>
		</div>
		
		<div class="container">
			<div id="search_filter">
				<h3>筛选</h3>
				<div>
					<div>
						<span class="tags">工作城市：</span>
						<select id="city_filter"></select>
					</div>
					<div>
						<span class="tags">学历要求：</span>
						<select id="edu_filter">
							<option>不限</option>
							<option>本科</option>
							<option>硕士</option>
							<option>博士</option>
							<option>专科</option>
						</select>
					</div>
					<div>
						<span class="tags">月薪范围：</span>
						<select id="money_filter">
							<option>不限</option>
							<option>2000以下</option>
							<option>2000~5000</option>
							<option>5000~1000</option>
							<option>10000~15000</option>
							<option>15000以上</option>
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
		<script src="js/searchjob.js"></script>
	</body>

</html>