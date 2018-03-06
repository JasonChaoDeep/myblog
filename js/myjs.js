window.onload=function () {
	var oTop=document.getElementById('totop')
		var four=null
		oTop.onclick=function (){
			four=setInterval(FourscrollBy,10);
	}
	function FourscrollBy(){
	if(document.documentElement && document.documentElement.scrollTop) //IE
	{
	if(document.documentElement.scrollTop<=0){
	clearInterval(four);
	}
	else{
	window.scrollBy(0,-50);
	}
	}
	else{ //Chrome不支持documentElement.scrollTop
	if(document.body.scrollTop<=0){
	clearInterval(four);
	}
	else{
	window.scrollBy(0,-30);
	}
	}
		}
}