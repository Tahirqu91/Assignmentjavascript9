//Task 1
var  multiarr = [ [], [], [] ]

//Task 2

var multiarra1 = [[0, 1, 2, 3],[1, 0, 1, 2], [2, 1, 0, 1] ] 
 document.write(multiarra1[0]+ "<br>" +multiarra1[1]+ "<br>" +multiarra1[2]+ "<br><br>")

 //Task 3

var count = [0,1,2,3,4,5,6,7,8,9,10]

for (var i = 1; i <= 10; i++){ 
    document.write(+i+ "<br><br>"); 
}

    

//Task 4

var multiply = prompt("Enter the number to show its multiplication table");
var  length = prompt("Enter length multiplication table");
for(var i=1; i<=length; i++){
  document.write(multiply+ "x" + i+ "=" + multiply*i+ "<br><br>");
}
 
//Task 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]; 
var leng = fruits.length;
for (var i = 0; i < leng; i++){ 
    document.write(fruits[i]+ "<br>"); 
} 

for(var i=0; i < leng; i++){
    document.write("Element at " + i +  " is " +fruits[i] + "<br>");
    }
    

    //Task 6
//(a)

  document.write("<h2>Counting:</h2>" );
for(var i = 1; i <=15; i++ )
{
 document.write( +i+ ",");
}

//(b)
document.write("<h2>Reverse Counting:</h2>" );

for(var i = 1; i <=15; i++ )
{
 document.write( +i+ ", ");
}

//(c)

document.write("<h2>Even Counting:</h2>" );

for(var i = 1; i <=20; i++ )
{
   if(i % 2===0) {
 document.write( +i+ ", ");
}
}

//(d)

document.write("<h2>Odd Counting:</h2>" );

for(var i = 1; i <=19; i++ )
{
   if(i % 2===1) {
 document.write( +i+ ", ");
}
}

//(e)
document.write("<h2>Series Counting:</h2>" );

for(var i = 1; i <=20; i++ )
{
   if(i % 2===0) {
 document.write( +i+ "k,");
}
}


//Task 7
document.write("<br><br>");
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]; 
 var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?"); 
 for (var i = 0; i < bakery.length; i++){ 
     if (bakery[i] === search){ 
         available = true; 
         break; 
     } 
     else{ 
         available = false; 
     }        
 } 
  
 if (available === true){ 
     document.write(search, " is available at index " + i+ " in our bakery"); 
 } 
 if (available === false){ 
     document.write("We are Sorry. ", search, " is not available in our bakery <br><br><br>"); 
 } 


 //Task 8

 num = [24, 53, 78, 91, 12]; 
 document.write("Array items: ", num); 
 largerNumber = Math.max(24, 53, 78, 91, 12); 
 document.write("<br> The larger Number is "  +largerNumber+ "<br><br>"); 

 //Task 9

 num = [24, 53, 78, 91, 12]; 
 document.write("Array items: ", num); 
 smallerstNumber = Math.min(24, 53, 78, 91, 12); 
 document.write("<br> The larger Number is "  +smallerstNumber+ "<br><br>"); 


 //Task 10

 for(var i = 1; i <=100; i++ )
{
   if(i % 5===0) {
 document.write( +i+ " , ");
}
}
