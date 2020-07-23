    //Chapter 35-38
      //Task 1 
document.write("Task 1: <br><br>")
function date(){
  var a = new Date();
document.write(a+ "<br><br>");

}
date();



//Task 2 
document.write("Task 2: <br><br>")

function string(){
  str1 = "Muhammad";
  str2 = " Tahir";
  string = str1 + str2;
  document.write("Hello " +string+ "<br><br>")
}
string();

//Task 3
document.write("Task 3: <br><br>")

function calc(){

  return a + b;
}

var num1 = +prompt("Enter first num")
var num2 = +prompt("Enter second num")
total= num1 + num2
document.write("Sum of two numbers " +total+ "<br><br>")

//Task 4
document.write("Task 4: <br><br>")

function add(num,opr,num1){
if(opr=== "+"){
 return num + num1
}
else if(opr=== "-"){
  return num - num1
 }
 else if(opr=== "/"){
  return num / num1
 }
 else if(opr=== "*"){
  return num * num1
 }
 
}

var result = add(10,"+",5);
var result1 = add(10,"-",5);
var result2 = add(10,"/",5);
var result3 = add(10,"*",5);
document.write(result+"<br><br>")
document.write(result1+"<br><br>")
document.write(result2+"<br><br>")
document.write(result3+"<br><br>")


//Task 5
document.write("Task 5: <br><br>")
function sqrt(){
  var x = Math.sqrt(25);
document.write("square root of 25 is "+x+ "<br><br>")
}
sqrt();

//Task 6
document.write("Task 6: <br><br>")
function factorial(){
  let answer = 1;
  if(n== 0 || n==1){
    return answer;
  }else{
    for(var i = n; i>= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
}
let n = 5;
answer =  factorial(n)
document.write("factorialis " +n+ " is " +answer+ "<br><br>");


//Task 7
document.write("Task 7: <br><br>")

function count(){
var a = prompt("enter first num")
var b = prompt("enter second num")
for(var i= a; i<b; i++) {
document.write( +i+ "<br><br>")
}
}
count();


//Task 8
document.write("Task 8: <br><br>")
function hypo(base, Perpendicular){
  function square(side){
    return side * side
  }
  return Math.sqrt(square(base) + square(Perpendicular));
}
base = prompt("Enter base of the traingle")
Perpendicular = prompt("Enter Perpendicular of the traingle")

document.write("Hypotenuse of traingle is : " +hypo(base, Perpendicular)+ "<br><br>");


//Task 9
document.write("Task 9: <br><br>")

function area (width,height){
  return width * height
}
height = prompt("Enter the height Traingle")
arearec = area(10, height)
document.write("area rectangle is: " +arearec+ "<br><br>");


//Task 10
document.write("Task 10: <br><br>")

function checkPalindrome() {
  InputString = prompt("Enter String");
  StringSplit = InputString.split("");
  var StringJoined = StringSplit.reverse().join("");
  if (InputString == StringJoined) {
    document.write(InputString + " is palindrome <br><br>");
  }
  else {
    document.write(InputString + " is not palindrome <br><br>");
  }
}
checkPalindrome();



//Task 11
document.write("Task 11: <br><br>")
function capitalizeWords(string)
{
 return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
document.write(capitalizeWords('the quick brown fox <br><br>'));


//Task 12
document.write("Task 12: <br><br>")
function Word(string) {
    var SplitedString = string.split(" ");
    var Word = 0;

    for (var i = 0; i < SplitedString.length - 1; i++) {
        if (Word < SplitedString[i].length) {
            Word = SplitedString[i].length;
            var FindWord = SplitedString[i];
        }
    }
    return FindWord;
}
SentenceORWord = prompt("Enter a Sentence or word : ")
document.write(Word(SentenceORWord)+"<br><br>")


//Task 13
document.write("Task 13: <br><br>")

function LettFinder(Str, Lett) {
      var x = 0,
          y = 0;
  
      for (i = 0; i < Str.length; i++) {
          if (Str[i] == Lett[0]) {
              for (j = i; j < i + Lett.length; j++) {
                  if (Str[j] == Lett[j - i]) {
                      y++;
                  }
                  if (y == Lett.length) {
                      x++;
                  }
              }
              y = 0;
          }
      }
      document.write("There are   " + x + "   occerence(s) of the word  " + Lett+ "<br><br>")
  }
  Str = prompt("Enter a String : ")
  Lett = prompt("Enter a Letter which you want to find")
  LettFinder(Str, Lett)
  


//Task 14
document.write("Task 14: <br><br>")
function calcCircumference(){
 
  return  2 * 3.142 * r;
}
 r = prompt("Enter a radius number")
document.write("The circumference is " +calcCircumference(r)+"<br><br>" )

function calcarea(){
 return 3.142 *r*r;
}
r = prompt("Enter a radius number")
document.write(" Area of circle  is " +calcarea(r)+"<br><br>" )
