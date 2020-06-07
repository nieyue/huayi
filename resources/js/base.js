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
	,
	scroll:function(element,callback){
		$(element).each(function(){
			var _this=this;
			;(function(_this){
				$(window).scroll(function() {
				var hT = $(_this).offset().top,
			       hH = $(_this).outerHeight(),
			       wH = $(document).height(),
			       wS = $(document).scrollTop();
			     if (wS > (hT+hH-wH)+50){
			     //if (hT>wS&&hT<(wS+wH)){
			     	console.log("hT="+hT+"hH="+hH+"wH="+wH+"wS="+wS)
			     	if(typeof callback=="function")
			     		
			        callback($(_this));
			     }
			})
			}

				)(_this)
			
		 });
	/*setInterval(function(){
		var _this=this;
		console.log(_this)
		$(element).each(function(){
			var hT = $(element).offset().top,
		       hH = $(element).outerHeight(),
		       wH = $(document).height(),
		       wS = $(document).scrollTop();
		     if (wS > (hT+hH-wH)){
		     	if(typeof callback=="function")
		        callback($(this));
		     }
		})
	},1000)*/
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
//跳转
$(".footicon3").click(function(){
		location.href="https://www.linkedin.com/company/hua-yi-technologie-sas/"

})
$(".footicon4").click(function(){
		location.href="https://twitter.com/hua_tech"

})