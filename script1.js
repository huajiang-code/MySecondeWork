var lis=document.getElementsByTagName("li");
var box=document.getElementById("div");
var i1=0;
var time=setInterval(function () {
    for( var i2=0;i2<lis.length;i2++){
        lis[i2].style.display="none";
    }
    if(i1>3){
        i1=0;
    }
    lis[i1++].style.display="block";
},500)
box.onmouseover=function () {
    clearInterval(time);
}

