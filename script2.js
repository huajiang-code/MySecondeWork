var arr=["一等奖","二等奖","三等奖","四等奖","五等奖","六等奖","七等奖"];
var div=document.getElementById("box");
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2");
btn1.addEventListener("click",shijian1);
btn2.addEventListener("mouseover",shijian2);
time=null;
function shijian1() {
    var i=0;
    time=setInterval(function () {
        if(i>arr.length-1){
            i=0;
        }
        div.innerHTML=arr[i++];
    },50);
}
function shijian2() {
    clearInterval(time);
}