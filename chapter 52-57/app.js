// Task1


var imgPathArr = ["images/others/5.jpg","images/others/6.jpg","images/others/7.png","images/others/8.jpg"];
var modal = document.getElementById("modal");
var imgInner = document.getElementById("modal-img")

var a;

var imgAr = document.getElementById("imgAr");
for (var i=0;i<=imgPathArr.length-1;i++){
    a = "onOpenImage("+i+")";
    imgAr.innerHTML += "<img class='format'id='"+i+"'src='"+imgPathArr[i]+"'onclick='"+a+"'></img>"

}
function onOpenImage(i){
    var imgId = document.getElementById(i);
    imgInner.src = imgPathArr[i];
    modal.className ="modal modal-open";
    
}
function onCloseImage(){
    modal.className = "modal-close ";
    setTimeout(timer,550);
}
function timer(){
    imgInner.src ="";
}






//task 2

var paragraph = document.getElementById("paragraph");
var size = 10;
function sizeIncrease(){

    paragraph.style.fontSize =(size+"px");
    size+=10;
}
function sizeDecrease(){

    paragraph.style.fontSize =(size+"px");
    size=size-10;
}
