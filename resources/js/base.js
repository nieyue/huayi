var business={
	isPC:function(){
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		   //alert('手机端')
		   $("#nav-wrap").css("width","50%")
		   $("#nav-wrap-bg").css("width","50%")
		   return false;
		}else{
			$("#nav-wrap").css("width","30%")
		   $("#nav-wrap-bg").css("width","30%")
		   //alert('PC端')
		   return true;
		}
	}


}

$("#nav-close").click(function(){
	$("#nav-wrap").css("display","none")
	$("#nav-wrap-bg").css("display","none")
})
$("#nav-open").click(function(){
	$("#nav-wrap").css("display","block")
	$("#nav-wrap-bg").css("display","block")
})