//task 1

var city = prompt ("Enter your city")
if(city=="karachi"&&"Karachi"){

     alert( " Welcome to city of lights"  );
    }
     

//task 2

var gender = prompt("Enter your gender")
if(gender=="male"){
   alert("Good Morning Sir.");
}
else if(gender=="female"){
    alert("Good Morning  Ma’am.");
}

//task 3

var signalcolor = prompt("Enter your color")
if(signalcolor=="red"){
   alert("Must Stop");
}else if(signalcolor=="yellow"){
    alert("Ready to move.");
}else if(signalcolor=="green"){
    alert("Move now.");
}

//task 4

var fuel = prompt("Enter fuel ") 
if(fuel<0.25){
   alert("Please refill the fuel in your car");
}


//task 5


var a = 4; 
 if (++a === 5){ 
 alert("given condition for variable a is true"); 
 } 
  
 var b = 82; 
 if (b++ === 83){ 
 alert("given condition for variable b is true"); 
 } 
  
 var c = 12; 
 if (c++ === 13){ 
 alert("condition 1 is true"); 
 } 
 if (c === 13){ 
 alert("condition 2 is true"); 
 } 
 if (++c < 14){ 
 alert("condition 3 is true"); 
 } 
 if(c === 14){ 
 alert("condition 4 is true"); 
 } 
  
 var materialCost = 20000; 
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost){ 
 alert("The cost equals"); 
 } 
  
  
 if (true){ 
     alert("True"); 
     } 
     else if (false){ 
     alert("False"); 
     } 
  
     if("car" < "cat"){ 
         alert("car is smaller than cat"); 
         } 


         //task 6

       document.write(" <h1> Marks Sheet: </h1> <br><br>");  

 var total = 300 
 var mSubject1 = prompt("Enter Subject Marks" ) 
 var mSubject2 = prompt("Enter Subject Marks ") 
 var mSubject3 = prompt("Enter Subject Marks" ) 
  
  
 var subt=++mSubject1 + ++mSubject3 + ++mSubject2 
 var subt=subt-3 
 --mSubject1 
 --mSubject2 
 --mSubject3 
 var subtpercentage=(subt/300)*100 
 var remakrs 
 var Grade 
 if(subtpercentage>=80){ 
  
     remakrs="Excellent" 
     Grade="A-one" 
  
 } 
 else if(subtpercentage>=70) 
 { 
  
     remakrs="Good" 
     Grade="A" 
  
 } 
 else if(subtpercentage>=60) 
 { 
  
     remakrs="You need to improve" 
     Grade="B " 
  
 } 
 else{ 
  
     remakrs="Sorry" 
     Grade="Fail" 
  
 } 

 document.write("Total Marks : "+total+"<br> Marks Obtained : "+subt+"<br> Percentage : "+subtpercentage+"<br> Grade : "+Grade+ " <br> Remarks : " +remakrs+ "<br><br>");
 

 //task7

 var a =3 
  
 var guess=prompt("Enter number b/w 1-10") 
  
 if(a==guess){ 
  
     document.write("Bingo! Correct answer <br><br>") 
 } 
 else if (a==(guess-1)){ 
  
     document.write("Close enough to the correct answer <br><br>") 
  
  
 } 


 //task8

 var a =prompt("Enter number") 
  
 var b=a%3 
  
 if(b==0){ 
 document.write(+ a + " is  divisible by 3 <br><br>") 
 } 


 //task 9

 var x = prompt("Enter number") 
  
 var y=x%2 
  
 if(y==0){ 
 document.write(x+" is even <br><br>") 
 } 
 else{ 
     document.write(x+" is odd <br><br>") 
 } 


  //task 10

  var temp = prompt("Enter today Temp")
  if(temp>40){
      alert("It is too hot outside.");
  }
 else if (temp>30){
    alert("The Weather today is Normal.");
}
else if(temp>20){
    alert("Today’s Weather is cool.");
}
else if(temp>10){
    alert("OMG! Today’s weather is so Cool.");
}


//task11

var a =  prompt("Enter Num1") 
 a++
 a--

 var b = prompt("Enter Num2") 
 b ++
 b--
 
 var opp = prompt("Enter Operator") 
 if(opp=="+"){ 
  
     document.write("Addition  " + a+b) 
 } 
 else if(opp=="-"){ 
     document.write("Subtraction  " + [a-b]) 
 } 
 else if(opp=="*"){ 
     document.write("Multiplication  " + a*b) 
 } 
 else if(opp=="/"){ 
     document.write("Division  " + a/b) 
 } 
 else if(opp=="%"){ 
     document.write("Modulus  " + a%b) 
 } 
   