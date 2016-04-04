$("#upload_img")
		.change(
				function() {
					var imgBlob = window.URL.createObjectURL(this.files[0]);
					if (this.files[0].type.indexOf("image") != 0) {
						layer.alert("上传的不是图片格式");
						this.value = "";
						return;
					}
					layer
							.open({
								type : 1,
								area : [ '600px', '500px' ],
								scrollbar : false,
								moveType : 1,
								title : "上传图片",
								content : '<div id="upload_box>" style="float:left;width:400px;height:400px;"><img id="upload_view_img" src="" /></div><p style="color:#999;margin:5px;margin-left:10px;">预览:</p><img style="display:block;float:left;border:1px solid #eee;width:150px;height:150px;margin-left:22px;" id="upload_view_img_v" src="" />',
								btn : [ "确定上传", "取消" ],
								yes : function() {
									
									$.post("upload_img.do",{
										username:$.cookie("username"),
										img:$("#upload_view_img_v").attr("src")
									},function(data){
										if(data.success == true){
											$("#user_img").attr("src",data.src);
										}else {
											layer.alert("上传失败");
										}
										layer.closeAll();
									},"json");
								},
								success : function() {
									var img = $("#upload_view_img");
									img.attr("src", imgBlob);
									img.cropper({
										aspectRatio : 1,
										dragCrop : false,
										strict:false,
										crop:function(b){
											var cvs = img.cropper('getCroppedCanvas', {
												width : 150,
												height : 150
											});
											var _src = convertCanvasToImage(cvs);
											$("#upload_view_img_v").attr("src",_src);
										}
									});
								}
							});
					this.value = "";
				});

function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image.src;
}