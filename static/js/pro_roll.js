//普通产品滚动
var speed=25
demo2.innerHTML=demo1.innerHTML
function Marquee()
{
if(demo2.offsetWidth-demo.scrollLeft<=0)
demo.scrollLeft-=demo1.offsetWidth
else
{
demo.scrollLeft++
}
}
var MyMar=setInterval(Marquee,speed)
demo.onmouseover=function() 
{
clearInterval(MyMar)
}
demo.onmouseout=function() 
{
MyMar=setInterval(Marquee,speed)
}