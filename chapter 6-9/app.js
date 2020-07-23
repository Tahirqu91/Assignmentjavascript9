//task 1

document.write("Result: <br>");

var a =10;

document.write("The value of a is:" +a+ "<br>");

document.write("...................................... <br><br>");

++a;
document.write( " The value of ++a is: " + a + "<br>" ); 
document.write("Now the value of a is:" +a+ "<br><br>");

document.write( " The value of a++ is: " + a + "<br>" );

a++;

document.write( " The value of a++ is: " + a + "<br><br>" );

--a;

document.write( " The value of --a is: " + a + "<br>" );
document.write("Now the value of a is:" +a+ "<br><br>");


document.write( " The value of a-- is: " + a + "<br>" );

a--;

document.write("Now the value of a is:" +a+ "<br><br><br><br>");



//task 2


var a = 2;
var y = --a; 
document.write("a is " + y + "<br><br>");

var b = 1;
document.write("b is " + b + "<br><br>");


var a = 2;
var b = 1;
var y = --a - --b + ++b + b--;
document.write("Result is " + y + "<br><br>");

//task3-4

var username = prompt ("Enter your name")
    
     alert("WELCOME " + username );
    

    //task5

    var a = prompt("Enter number");
 if(a == "")
{
   document.write("print 5 table");
}
else
{
   for(var i=1; i<=10; i++)
   {
      document.write(a + "*" + i + "=" + a*i + "<br><br>");
   }
}


    //task6

 var subject = prompt(" Enter Subject Name") 
 var subject1 = prompt("Enter Subject Name") 
 var subject2 = prompt("Enter Subject Name") 
 var total = 100 
 var marksubject1 = prompt("Enter Subject Marks for" +subject1) 
 var marksubject = prompt("Enter Subject Marks for" +subject2) 
 var marksubject = prompt("Enter Subject Marks for" +subject3) 
  
 var percentagesubject1 =(marksubject1/total)*100 
 var percentagesubject2 =(marksubject2/total)*100 
 var percentagesubject3 =(marksubject3/total)*100 
 var subt=++marksubject1 + ++marksubject3 + ++marksubject2 
 var subt=subt-3 
  --marksubject1 
 --marksubject2 
 --marksubject3 
 var subtpercentage=(subt/300)*100 


    document.write("<table><tr> <td>"+subject1+"</td> <td>"+total+"</td> <td>"+marksubject1+"</td> <td>"+percentagesubject1+"%</td> </tr>   <tr> <td>"+subject2+"</td> <td>"+total+"</td> <td>"+marksubject2+"</td> <td>"+percentagesubject2+"%</td> </tr>   <tr> <td>"+subject3+"</td> <td>"+total+"</td> <td>"+markSubject3+"</td> <td>"+percentageSubject3+"%</td> </tr> <tr> <td></td> <td>"+total*3+"</td> <td>"+subt+"</td> <td>"+subtpercentage+"%</td> </tr> </table>") 
  

   
    




