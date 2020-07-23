//     //Chapter 21-25
      //Task 1 
document.write("Task 1: <br><br>")

   var first = prompt("Enter your first name")
      var last = prompt("Enter your last name")
      var fullname = ("WELCOME " + first + " " +last+  "<br><br>")
      document.write(fullname+ "<br><br>");


      //Task 2
      document.write("Task 2: <br><br>")
var str = prompt("Enter your favorite Mobile")
var a = str.length;
document.write("My favorite phone is: " +str+ " <br> Length of string :" +a+ "<br><br><br>");


 //Task 3
 document.write("Task 3: <br><br>")
 
 var str = "Pakistani";
 var a = str.indexOf("n")
 document.write("String: "+str+ "<br> Index of 'n': " +a+ "<br><br><br>")

  //Task 4
  document.write("Task 4: <br><br>")
 
  var str = "Hello world";
  var a = str.lastIndexOf("l")
  document.write("String: "+str+ "<br> Index of 'l': " +a+ "<br><br><br>")
 

   //Task 5
 document.write("Task 5: <br><br>")
 
 var str = "Pakistani";
 var a = str.charAt("3")
 document.write("String: "+str+ "<br> Character at Index  3 : " +a+ "<br><br><br>")


       //Task 6 
document.write("Task 6: <br><br>")

var str1 = prompt("Enter your first name")
   var str2 = prompt("Enter your last name")
   var fullname = str1.concat(str2);
   var fullname = ("WELCOME " + str1 + " " +str2+  "<br><br>")
   document.write(fullname+ "<br><br>");

          //Task 7
document.write("Task 7: <br><br>")


var str = "Hydrabad";
var a = str.replace("Hydr" , "Islam"  );
document.write("City: " +str+ "<br> After replacement: " +a+ "<br><br><br>")


       //Task 8 
       document.write("Task 8: <br><br>")


var message = "Ali and Sami are best friends. They play cricket and football together.";
var a = message.replace(/and/g , "&"  );
document.write("City: "   +a+ "<br><br><br>")


  //Task 9 
  document.write("Task 9: <br><br>")
 
  var a = "472";
 var b = parseInt(a)
  document.write("Value:"+a+ "<br> Type:String <br><br> Value:"+b+ " <br>Type:Number <br><br><br>")


  //Task 10 
 document.write("Task 10: <br><br>")
 var a = prompt("Input user")
 var str = "peanuts";
 var b = str.toUpperCase();
 document.write("User input:"+str+ "<br> Upper case:" +b+ "<br><br><br>")

 //Task 11 
 document.write("Task 11: <br><br>")

 var str = prompt("Enter user input")
 var b = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase()
 document.write(b+ "<br><br>")
 
 
 //Task 12 
 document.write("Task 12: <br><br>")

 var num = 35.36;
 var a = num.toString().replace("." , "")
 document.write(a+ "<br><br>")


  //Task 13 
 document.write("Task 13: <br><br>")

 
var str =prompt("Enter username")
for(var i=0; i<str.length; i++)
{
    char = str[i].charCodeAt(0);
   
    if(char == 33 || char == 44 || char == 46 || char == 64)
    {
        alert("please enter valid username");    	
        break;
    }
   
}





//Task 14 
 document.write("Task 14: <br><br>")
 var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]; 
 var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?"); 
var small = search.toLowerCase();

 for (var i = 0; i<bakery.length; i++){ 
     if (bakery[i] === small){ 
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


  //Task 15 
 document.write(" <br> Task 15: <br><br>")
 var pass = prompt("Enter password")
var max_chars="6";
for(var i=0; i<pass.length; i++)
{
    char = pass[i].charCodeAt(0);
    if(char == 48 || char == 49 || char == 50 || char == 51 || char == 52 || char == 53 || char == 54 || char == 55 || char == 56 || char == 57)
{
    alert("password cannot strt")
    break;
}

}if (pass.length >=max_chars){
alert("password is ok")
}

  //Task 16 
  document.write("Task 16: <br><br>")


var str = 'University of Karachi';
var myarray= str.split('').join("<br>");  
 document.write(myarray);





 //Task 17 
document.write(" <br> Task 17: <br><br>")

var a = "Pakistan";
var user =prompt("Enter user input")
var user = (a.charAt(7));
document.write("User input: " +a+ "<br> Last character of input: "+user+ "<br><br>");



 //Task 18 
 document.write(" <br> Task 18: <br><br>")
var str = "The quick brown fox jumps over the lazy dog";
 var count = str.substring(0).toLowerCase()
var x = (count.match(/the/g)||[]).length;
 document.write("Text: " +str+  "<br><br> There are " +x+" occurrence(s) of word 'the' <br><br>")
 




