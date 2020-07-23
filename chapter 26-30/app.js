    //Chapter 26-30
      //Task 1 
document.write("Task 1: <br><br>")
//a
var num = 3.45214
document.write("number: "+num+ "<br><br>")
//b
var num = 3.45214;
var round = Math.round(num)
document.write("round off: "+round+ "<br><br>");

//c
var num = 3.45214;
var round = Math.floor(num)
document.write("floor value: "+round+ "<br><br>");

//d
var num = 3.45214;
var round = Math.ceil(num)
document.write("ceil value: "+round+ "<br><br>");


//Task 2 
document.write("Task 2: <br><br>")
//a
var num = -2.673
document.write("number: "+num+ "<br><br>")
//b
var num = -2.673;
var round = Math.round(num)
document.write("round off: "+round+ "<br><br>");

//c
var num = -2.673;
var round = Math.floor(num)
document.write("floor value: "+round+ "<br><br>");

//d
var num = -2.673;
var round = Math.ceil(num)
document.write("ceil value: "+round+ "<br><br>");


//Task 3 
document.write("Task 3: <br><br>")

var value = -4;
var a = Math.abs(value)
document.write("The absolute value of " +value+ " is " +a+ "<br><br>")

var value = 5;
var a = Math.abs(value)
document.write("The absolute value of " +value+ " is " +a+ "<br><br>")


//Task 4 
document.write("Task 4: <br><br>")

var dice = Math.floor(Math.random()*6 );
alert(dice)
var dice = Math.floor(Math.random()*4 );
alert(dice)

//Task 5 
document.write("Task 5: <br><br>")
var toss1 = Math.floor(Math.random() *2)+1;
var toss2 = Math.floor(Math.random() *2)+1;
if(toss1===toss2){
alert("random coin value: tails")

}
else{
  alert("random coin value: Heads")
}


//Task 6
document.write("Task 6: <br><br>")

var a = Math.floor(Math.random()*100 )+1;
document.write(a+ "<br><br>")


//Task 7
document.write("Task 7: <br><br>")
var user = prompt("Enter your weight")
var b = parseInt(user)
document.write("The weight of user is " +b+ " kilograms <br><br>")




//Task 8
document.write("Task 8: <br><br>")
var input = prompt ("Enter user secret number")
var b = Math.floor((Math.random()*10))
document.write(b)
if(input == b){
  alert("Congratulatethe user")
}else{
  alert("Try again")
}
