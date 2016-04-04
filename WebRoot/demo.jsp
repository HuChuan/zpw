<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>注册 - 招聘网</title>
<link rel="stylesheet" href="css/register.css" />
</head>

<body>

	<!--引用header-->
	<%@include file="header.jsp"%>
	<input id="test2" type="button" value="click">



	<!--引用footer-->
	<%-- <%@include file="footer.jsp"%> --%>

	<script src="js/register.js"></script>
	<script src="layer/layer.js"></script>
	<script type="text/javascript">
		$('#test2').on('click', function() {
			layer.open({
				type : 1,
				area : [ '600px', '360px' ],
				shadeClose : true, //点击遮罩关闭
				content : '123'
			});
		});
	</script>
</body>

</html>