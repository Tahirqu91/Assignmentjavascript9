//task 1

var a = 5;
var b = 3;
var c = a+b; 
document.write("Sum of 3 and 5 is " +c+   "<br> <br>" );



//task 2 



var a = 5;
var b = 3;
var c = a-b; 

document.write("Subtract of 3 from 5 is "  +c+   "<br> <br>" );

var d = 5;
var e = 3;
var f = d*e; 

document.write("Multiply 5 by 3 is "  +f+   "<br> <br>" );

var g = 5;
var h = 3;
var i = g/h; 

document.write("Division  5 by 3 is "  +i+   "<br> <br>" );

var j = 5;
var k = 3;
var l = j%k; 

document.write("Modulus  5 mod 3 is "  +l+   "<br> <br>" );

//task 3

var num;
document.write( "<br><br> Value after variable declaration is " + num + "<br>" );
num = 5;
document.write( " Initial value: " + num + "<br>" );
num++;
document.write( " Value after increment is: " + num + "<br>" );
num += 7;
document.write( "Value after addition is: " + num + "<br>" ); 
num--;
document.write( " Value after decrement is: " + num + "<br>" );
num %=3;
document.write( " The remainder is: " + num + "<br>" );


//task 4

var a = 600;
var b = 5;
var c = a*b;
document.write( " <br><br> Total cost to buy 5 tickets to a movie is " + c + "PKR <br><br><br>"  );


//task 5


 for(var i = 1; i <= 10; i++){
   

    document.write( "4" + "x" + i + "=" + 4*i + "<br>");
}


//task6
document.write("<h2> Temperature Weather: </h2> <br>");

var C =25;
F =(C*9/5)+32;
document.write( + C + "°C is "  + F + "°F  <br><br>");



var F =70;
C =(F-32)*5/9;
document.write( + F + "°F is "  + C + "°C <br><br>");



//task 7

document.write("<h2> Shopping Cart </h2> <br> <br>");

var a = 650;

document.write("Price of item 1 is " +a+ "<br>");

var b = 3;

document.write("Quantity of item 1 is " +b+ "<br>");

var c = 100;

document.write("Price of item 2 is " +c+ "<br>");

var d = 7;

document.write("Quantity of item 2 is " +d+ "<br>");

var e = 100;

document.write("Shipping Charges " +e+ "<br><br>");

var f = (a*b)+(c*d)+e;

document.write("Total cost of your order is " +f+ "<br><br><br>");


//task 8

document.write("<h2> Marks Sheet </h2> <br> <br>");

var a = 980;
document.write("Total marks: " +a+ "<br>");

var b = 804;
document.write("Marks obtained: " +b+ "<br>");

var c = b/a*100;

document.write("Percentage: " +c+ "<br><br>");

//task 9

document.write("<h1> Currency in PKR </h1> <br><br>");

var x = (104.80*10)+(28*25);

document.write("Total Currency in PKR: " +x+ "<br><br><br><br>");




//task 10


var a = 5+(10/2);
document.write("Total: " +a+ "<br><br><br><br>" );

//task 11 
document.write("<h2> Age Calculator </h2> <br>");

var c = 2016;

document.write("Current Year:" +c+ "<br>");

var d = 1992;

document.write("Birth Year:" +d+ "<br>");


var e = c-d;

document.write("Your Age is:" +e+ "<br><br>");


//task 12
var x = 20;

document.write("<h1> The The Geometrizer </h1> <br><br>");


document.write("Radius of a circle:" +x+ "<br>");

var a = 3.142;
var b = 20;
var c = 2*(a*b);
document.write("The circumference is: " +c+ "<br>");

var a = 3.142;
var b = 20*20;
var c = (a)*(b);
document.write("The area is: " +c+ "<br><br>");


//task 13

document.write("<h1> The Lifetime Supply Calculator </h1> <br><br>");

var a = "chocolate chip";
document.write("Favourite Snack: " +a+ "<br>");

var b = 15;
document.write("Current age: " +b+ "<br>");

var c = 65;
document.write("Estimated Maximum Age: " +c+ "<br>");

var d = 3;
document.write("Amount of snacks per day: " +d+ "<br>");

var e = 65;
var f = (c-b)*365*(d);

document.write("You will need " +f+ " chocolate chip to last you until the ripe old sge of " +e+ "<br>");
