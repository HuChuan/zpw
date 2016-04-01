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
			<!--
				轮播器（1024*300）,最多9张
			-->
			<div id="carousel" class="container">
				<div id="carousel_img">
					<a num="0" href="">
						<img src="images/source/c1.png" alt="轮播图" />
					</a>
					<a num="1" href="">
						<img src="images/source/c2.png" alt="轮播图" />
					</a>
					<a num="2" href="">
						<img src="images/source/c3.png" alt="轮播图" />
					</a>
				</div>
				<div id="carousel_index">
					<span num="0" class="active"></span>
					<span num="1"></span>
					<span num="2"></span>
				</div>
				<button id="carousel_pre"></button>
				<button id="carousel_next"></button>
			</div>
			<!--
				搜索框
			-->
			<form id="search_f" action="" method="get" class="container">
				<div id="search">
					<label id="search_holder" for="search_t" class="unuser_select">请输入职位名称 或 公司名称 或 人才简历</label>
					<input id="search_t" name="keyword" type="search" autocomplete="off" />
					<input id="search_sub" type="submit" value="搜 索" />
				</div>
			</form>
		</div>

		<!--
			热门企业
		-->
		<div id="hot_ep" class="container">
			<h2><span>热门企业</span></h2>
			<ul id="hot_ep_list" class="unlist">
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep3.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep3.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep2.png" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep3.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep2.png" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep3.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep3.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公fwaefwa f dfefwe</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep1.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="images/source/ep3.jpg" />
						<span>小样乳酸 公</span>
					</a>
				</li>
			</ul>
		</div>

		<!--
			热门职位
		-->
		<div class="container_bg hot_job">
			<div id="hot_job" class="container">
				<h2><span>热门职位</span></h2>
				<ul id="hot_job_list" class="unlist">
					<li>
						<div>
							<p><a class="job_name" href="">职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名称</a></p>
							<p><a class="ep_name" href="">公司名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名职位名称</a></p>
							<p>
								<span class="city">城市城市城市城市城市城市城市</span>
								<span class="money">3000-80000/月</span>
								<span class="exp">3年-5年</span>
							</p>
						</div>
						<a href=""><img src="images/source/ep3.jpg" /></a>
					</li>
					<li>
						<div>
							<p><a class="job_name" href="">职位名称</a></p>
							<p><a class="ep_name" href="">公司名称</a></p>
							<p>
								<span class="city">城市</span>
								<span class="money">3000-80000/月</span>
								<span class="exp">3年-5年</span>
							</p>
						</div>
						<a href=""><img src="images/source/ep2.png" /></a>
					</li>
					<li>
						<div>
							<p><a class="job_name" href="">职位名职位名职位 职位名称</a></p>
							<p><a class="ep_name" href="">公司名职位名 位名职位名职位名称</a></p>
							<p>
								<span class="city">城市城市城市城市城市城市城市</span>
								<span class="money">3000-80000/月</span>
								<span class="exp">3年-5年</span>
							</p>
						</div>
						<a href=""><img src="images/source/ep3.jpg" /></a>
					</li>
					<li>
						<div>
							<p><a class="job_name" href="">职位名称</a></p>
							<p><a class="ep_name" href="">公司名称</a></p>
							<p>
								<span class="city">城市</span>
								<span class="money">3000-80000/月</span>
								<span class="exp">3年-5年</span>
							</p>
						</div>
						<a href=""><img src="images/source/ep2.png" /></a>
					</li>
					<li>
						<div>
							<p><a class="job_name" href="">职位名职位 名称</a></p>
							<p><a class="ep_name" href="">公司名 职位名职位名称</a></p>
							<p>
								<span class="city">城市城市城 市</span>
								<span class="money">3000-80000/月</span>
								<span class="exp">3年-5年</span>
							</p>
						</div>
						<a href=""><img src="images/source/ep3.jpg" /></a>
					</li>
					<li>
						<div>
							<p><a class="job_name" href="">职位名称</a></p>
							<p><a class="ep_name" href="">公司名称</a></p>
							<p>
								<span class="city">城市</span>
								<span class="money">3000-80000/月</span>
								<span class="exp">3年-5年</span>
							</p>
						</div>
						<a href=""><img src="images/source/ep2.png" /></a>
					</li>

				</ul>
				<div class="showmore"><a href="">查看更多</a></div>
			</div>
		</div>
		
		<!--
			返回顶部
		-->
		<input id="top_btn" type="button" />

		<!-- 引用footer -->
		<%@include file="footer.jsp"%>
		
		<script src="js/jquery-ui.min.js"></script>
		<script src="js/index.js"></script>
	</body>

</html>