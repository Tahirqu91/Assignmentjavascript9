    //Chapter 31-35
      //Task 1 
document.write("Task 1: <br><br>")

var a = new Date();
document.write(a+ "<br><br><br>");


     //Task 2
     document.write("Task 2: <br><br>")
     var a = new Date();
     var Month = ["january","february","march","april","may","June","july","aug","sep","oct","nov","dec",]
     var z = Month[a.getMonth()];
     document.write("Current Month: "+z+ "<br><br><br>");

         //Task 3
         document.write("Task 3: <br><br>")
        var day = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
         var a = new Date();
         var b = day[a.getDay()];
         alert("Today is " +b)


   //Task 4
  document.write("Task 4: <br><br>")

  var date = new Date();
if(date.getDay() == 6 || date.getDay() == 0)
document.write("It's Fun day <br><br><br>")


  //Task 5
  document.write("Task 5: <br><br>")


var date = new Date();
var a = date.getDate();
if(a<=16){
  document.write("First fifteen days of the month <br><br><br>")
}else{
  document.write("Last days of the month <br><br><br>")
}

        //  //Task 6
          document.write("Task 6: <br><br>")
        
        var date1 = new Date("Dec 5, 2015 22:32:23");
        var today = date1.getTime()
        var today1 = date1.getTime()/(1000*60*60)
        
        document.write("Elapsed miliseconds since jan 1, 1970: " +today+ "<br><br><br>")
        document.write("Elapsed minute since jan 1, 1970: " +today1+ "<br><br><br>")


  //Task 7
  document.write("Task 7: <br><br>")

  var date = new Date();
  var hour = date.getHours()
  if(hour<=12){
    alert("Its AM ")
  }else
  {
    alert("Its PM ")
  }

  //Task 8
  document.write("Task 8: <br><br>")

  var check = new Date();
var checknew = new Date(check.getFullYear(),check.getMonth()+6,check.getDate()+08)

document.write(checknew+ " <br><br><br>") 

//Task 9
document.write("Task 9: <br><br>")

var date = new Date();
var date11 = new Date("april 25, 2020" );
var diff = date.getTime() - date11.getTime()
var a =diff/(1000*60*60*24)
var b = Math.ceil(a)

document.write(+b+ " days have passed since 1st Ramzan, 2020 <br><br><br>" )

//Task 10
document.write("Task 10: <br><br>")

var date = new Date("june 21, 2020")
var date1 = new Date("jan 1, 2020")
var a = date.getTime()-date1.getTime()
var b = a/(1000*60)
 document.write(b+"<br><br><br>") 


//Task 11
document.write("Task 11: <br><br>")

var date = new Date();
var time = new Date();
var hour = date.setHours(20);

document.write("Current date: " +time+ "<br><br> 1 hour ago,it was " +date+ "<br><br><br>")


//Task 12
document.write("Task 12: <br><br>")
var date = new Date()
var time = new Date();
var year = date.setFullYear(1920);

document.write("Current date: " +time+ "<br><br> 100 year back ,it was " +date+ "<br><br><br>")


//Task 13
document.write("Task 13: <br><br>")
 var age = prompt("Enter your age")
var date = new Date();
var date1 = date.getFullYear()
 var b = date1 - age;
document.write("Your age is " +age+ "<br><br> Your birth year is " +b+ "<br><br>")


//Task 14
document.write("Task 14: <br><br>")

var user = prompt("Enter customer Number of units")
var user1 = prompt("Enter customer charges per unit")
var total = user * user1
var late = 350
var total1 = total + late


document.write("<h2> K-Electric Bill </h2> <br>")

document.write("Customer Name: <b> Muhammad Ahmed </b> <br>")

var Month = ["january","february","march","april","may","June","july","aug","sep","oct","nov","dec"]
var date = new Date()
var z = Month[date.getMonth()];
document.write("Current Month: <b>"+z+ "</b> <br>");
     
document.write("Number of units:" +user+  "<br>")
document.write("Charge per units:" +user1+  "<br><br>")

document.write("Net Amount Payable (within Due Date): " +total+ "<br>")
document.write("Late payment charge: " +late+ "<br>")
document.write("Gross Amount Payable (after Due Date):  " +total1+ "<br><br>")

