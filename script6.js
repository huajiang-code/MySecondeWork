var content=document.getElementById("content"),
    left=document.getElementById("left"),
    right=document.getElementById("right"),
    uls=document.getElementById("uls"),
    lis1=uls.getElementsByTagName("li");
    ols=document.getElementById("ols"),
    lis2=ols.getElementsByTagName("li"),
    index=0;
left.style.display="none";
right.style.display="none";
content.onmouseover=function () {
    left.style.display="block";
    right.style.display="block";
}
content.onmouseout=function () {
    left.style.display="none";
    right.style.display="none";
}
right.onclick=function () {

    for(var i=0;i<lis1.length;i++)
    {
        lis1[i].style.display="none";
        lis2[i].className="";
    }
    index++;
    if(index>3)
    {
        index=0;
    }

    lis1[index].style.display="block";
    lis2[index].className="bg";
}
left.onclick=function () {
    for(var i=0;i<lis1.length;i++)
    {
        lis1[i].style.display="none";
        lis2[i].className="";
    }
    index--;
    if(index<0)
    {
        index=3;
    }
    lis1[index].style.display="block";
    lis2[index].className="bg";
}
var time=setInterval(function () {
    for (var i = 0; i < lis1.length; i++) {
        lis1[i].style.display = "none";
        lis2[i].className="";
    }
    index++;
    if (index > 3)
    {
        index=0;
    }
    lis1[index].style.display="block";
    lis2[index].className="bg";
},1000)