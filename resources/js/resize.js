(function(){ 
    function resizeBaseFontSize(){ 
      var scale=1639/921;//
      var rootHtml = document.documentElement,
          deviceWidth = rootHtml.clientWidth; 
      if(deviceWidth > 990){ 
         deviceWidth = 640;  
      }  
     // rootHtml.style.fontSize = deviceWidth / 7.5 + "px";  
       rootHtml.style.fontSize = deviceWidth / 7.5 + "px";
   }  
   resizeBaseFontSize();  
   window.addEventListener("resize", resizeBaseFontSize, false);  
   window.addEventListener("orientationchange", resizeBaseFontSize, false);  
})(); 