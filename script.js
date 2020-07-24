var start = performance.now();
var c=0;
function repeat(){
	start=performance.now();
	var topbar=Math.random()*300+100;
	var leftbar=Math.random()*1000+100;
	var width=Math.random()*100+100;
	if(Math.random()<0.5)
	document.getElementById("division").style.borderRadius="100%";
    else
    document.getElementById("division").style.borderRadius="0";	
	document.getElementById("division").style.display="block";
	document.getElementById("division").style.backgroundColor=getcolor();
	document.getElementById("division").style.top=topbar+"px";
	document.getElementById("division").style.left=leftbar+"px";
	document.getElementById("division").style.width=width+"px";
	document.getElementById("division").style.height=width+"px";
}
function getcolor()
{
	var c=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var color="#";
	for (var i=0;i<6;i++)
	{
		color+=c[Math.floor(Math.random()*16)];
	}
	return color;
}
function makecall(){
	setTimeout(repeat, Math.random()*2000);
}
document.getElementById("division").onclick=function()
{
	c++;
	var end = performance.now();
	document.getElementById("division").style.display="none";
	document.getElementById("time").innerHTML="Time taken:"+(end-start)/1000+ " s "+ " Number of times you have made it: "+c;
	makecall();
}