// Chapter 38-42
// Task 1
document.write("Task 1 <br>")
function power(){
    document.write("Power of (5,3) " + Math.pow(5,3)+ "<br><br><br>")
}
power()

// Task 2
document.write("Task 2 <br>")
function leapyear(year){

return (year% 100 === 0) ? (year% 400 === 0):(year% 4 === 0);
}
document.write(leapyear(2012)+"<br><br>");
document.write(leapyear(2016)+"<br><br>");
document.write(leapyear(2020)+"<br><br>");
document.write(leapyear(2021)+"<br><br>");
document.write(leapyear(2023)+"<br><br><br>");


// Task3
document.write("Task 3 <br>")

function areaSide(){
  a = +prompt("Enter first side: ")
  b = +prompt("Enter second side: ")
  c = +prompt("Enter third side: ")
var  s= (a+b+c)/2;
return s;
}
function trainglearea(){
  var side = areaSide()
  var total = Math.sqrt (side*(side-a)*(side-b)*(side-c))
  return total;
  
}
document.write(trainglearea()+"<br><br>")

// Task 4
document.write("Task 4 <br>")

function mainFunction(total1,total2){
  var sub1=+prompt("Enter the first subj marks")
  var sub2=+prompt("Enter the second subj marks")
  var sub3=+prompt("Enter the third subj marks")

function average(){
 
 var avge = (sub1+sub2+sub3)/3
return avge;
}

function percentage(){
  var perc =((sub1+sub2+sub3)/300)*100
return perc;
}

total1 = average()
total2 = percentage()

alert("Average is " +total1+  " percentage is " +total2)
}
mainFunction()



// Task5
document.write("Task 5 <br>")
function char(){
    var character = ["cat" , "fish" ,"duck", "cow", "camel"]
document.write(character.indexOf('cow')+ "<br><br><br>")
}
char()


// Task6
document.write("Task 6 <br>")
var string = "I am Muhammad Tahir and i am learning web and mobile hybrid development"
strings =string.replace( /[aeiou]/g, "");
document.write(strings+ "<br><br>")


// Task7
document.write("Task 7 <br>")
function vowel() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(vowel());
  
//TAsk 8
document.write("Task 8 <br>")
var km = +prompt("Enter the distance between two cities in km")
function m(){
  var m = 1000*km;
  return m;
}
document.write("The distance between cities in Meters is "+m()+ "<br>")
function cm(){
  var cm = 1000*100*km;
  return cm;
}
document.write("The distance between cities in Centimeters is "+cm()+ "<br>")

function f(){
  var f = 3280.84*km;
  return f;
}
document.write("The distance between cities in Feets is "+f()+ "<br>")

function i(){
  var i = 39370.08*km;
  return i;
}
document.write("The distance between cities in Inches is "+i()+ "<br><br>")


//TAsk 9
document.write("Task 9 <br>")
var overtime = +prompt("Please enter the number of hours you work this week")
var rate = +prompt("Please enter how much money you earn per hour  ")

if(overtime>=40){
  pay = (rate*40)                        
  over = ((rate*1.5)*(overtime-40))    
total = (pay+over)
alert(total)
}

//TAsk 10
document.write("Task 10 <br>")
function currency(){
    var cash=+prompt("Enter  cash")
    var hundred= parseInt(cash/100);
    var fifty= parseInt((cash%100)/50);
    var ten= parseInt((cash%100%50)/10);
document.write("you will  have " +hundred+ " hundred notes " +fifty+ " fifty notes " +ten+ " ten notes <br><br>"   )
}
currency()