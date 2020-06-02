var business={
	isPC:function(){
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		   //alert('手机端')
		   return false;
		}else{
		   //alert('PC端')
		   return true;
		}
	}


}