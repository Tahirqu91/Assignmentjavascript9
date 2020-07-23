//task 1

var x =prompt("Enter char") 
  
 if(x<="Z" && x>="A"){ 
  
     document.write("It is Upper case <br><br>") 
 } 
 else if(x>="a" && x<="z"){ 
  
     document.write("It is Lower case <br><br>") 
 } 
  


//task 2

var x = prompt("Enter num")
var y = prompt("Enter num")
if(x>y);
{
    alert(x);
}
if(x<y){
    alert(y);
}
else{ 
    document.write("Both are equal <br><br>") ;
} 



//task 3

var num = prompt("Enter num")
if(num>0)
{
 document.write("Number is positive <br><br>");
}
else if  (num<0)
{
    document.write("Number is negative <br><br>");
}
else
{ 
    document.write("Number is 0 <br><br>") ;
} 

//task 4

var x = prompt("Enter Charater")
if(x=="a"||x=="e"||x=="i"||x=="o"||x=="u"){
    document.write("True <br>");
}
else{ 
    document.write("False <br>") ;
} 


//task 5
var Password = "pakistan123";
var passw = prompt("Enter Password")
if(passw==""){
alert("Enter PASSWORD <br><br>");
}
else if(Password==passw){
    alert("Correct! The password you entered matches the original password <br><br>");
}
else{
    alert("Incorrect password <br><br>");
}




//task 6


var hour = 23;

if (hour < 10) 

{
document.write("Good day <br><br>");
 }
 
 else if (hour > 20)
 
{
    document.write("Good evening <br><br>");
     }

//task 7
var time = prompt("Enter time")
if(time>=0000&&time<=1200){
    alert("Good Morning! <br>");
}

else if(time>=1200&&time<=1700){
    alert("Good Afternoon! <br>");
}

else if(time>=1700&&time<=2100){
    alert("Good Evening! <br>");
}

else if(time>=2100&&time<=2359){
    alert("Good Night! <br>");
}

