// Chaper 43-48
// Task 1
function link(){
    alert("Hello World")
}


// Task 2

function pic(){
    alert("Thanks for purchasing a phone from us ")
}

// Task 3

function newFunction(){
   document.getElementById("remove").remove();
   
}

// Task 4

function changeImages(){
  var carImages = document.getElementById('pic')
carImages.src = 'img/images1.jpeg'
}

function beforeImages(){
    var carImages = document.getElementById('pic')
  carImages.src = 'img/images.jpeg'
  }
  



//  Task 5
document.write("<br><br><br>")
var i = 0 
function buttonclick(){
    var inc = document.getElementById("inc");
    inc.innerHTML = ++i ;    

}

var i = 0 
function buttonclick1(){
 var dec = document.getElementById("inc");
    dec.innerHTML = --i ;
}    
