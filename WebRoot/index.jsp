<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>主页 - 招聘网</title>
		<link rel="stylesheet" href="css/index.css" />
	</head>

	<body>
		
		<!-- 引用header -->
		<%@include file="header.jsp"%>

		<div class="container_bg carousel">
			<!--轮播器（1024*300）,最多9张-->
			<div id="carousel" class="container">
				<div id="carousel_img"></div>
				<div id="carousel_index"></div>
				<button id="carousel_pre"></button>
				<button id="carousel_next"></button>
			</div>
			<!--搜索框-->
			<form id="search_f" action="searchjob.jsp" method="get" class="container">
				<div id="search">
					<label class="hidden" id="search_holder" for="search_t" class="unuser_select">请输入职位名称 或 公司名称</label>
					<input id="search_t" name="kw" type="search" autocomplete="off" placeholder="请输入职位名称 或 公司名称" />
					<input id="search_sub" type="submit" value="搜 索" />
				</div>
			</form>
		</div>

		<!--热门企业-->
		<div id="hot_ep" class="container">
			<h2><span>热门企业</span></h2>
			<ul id="hot_ep_list" class="unlist"></ul>
		</div>

		<!--热门职位-->
		<div class="container_bg hot_job">
			<div id="hot_job" class="container">
				<h2><span>热门职位</span></h2>
				<ul id="hot_job_list" class="unlist"></ul>
				<div class="showmore"><a href="searchjob.jsp">查看更多</a></div>
			</div>
		</div>
		
		<!--返回顶部-->
		<input id="top_btn" type="button" />

		<!-- 引用footer -->
		<%@include file="footer.jsp"%>
		
		<script src="js/jquery-ui.min.js"></script>
		<script src="js/index.js"></script>
	</body>

</html>