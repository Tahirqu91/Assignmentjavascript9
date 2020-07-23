//task 1

Studentname =[];

document.write("Studentname =[]; <br><br> ");
 

//task 2

 document.write("Studentname = (); <br><br>")
 
 //task 3

 String=["Biryani","Korma","Nihari"]

 document.write(' String=["Biryani", " Korma", "Nihari"]<br><br>' );
 

 //task 4
 
 Num=[45,46,47]
 
 document.write("Num=[45,46,47] <br><br>");
 
 //task 5
 
 document.write(" Boolean=[True,False] <br><br>");

 //task 6

 document.write(' Mixed=["Bike",1,"False"] <br><br><br>');

 //task 7

 document.write("<h1>Qualifications</h1> <br>");

eduqua=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"] 

document.write("1)" +eduqua[0]+ "<br><br>");
document.write("2)" +eduqua[1]+ "<br><br>");
document.write("3)" +eduqua[2]+ "<br><br>");
document.write("4)"+eduqua[3]+ "<br><br>");
document.write("5)"+eduqua[4]+ "<br><br>");
document.write("6)"+eduqua[5]+ "<br><br>");
document.write("7)"+eduqua[6]+ "<br><br>");
document.write("8)"+eduqua[7]+ "<br><br>");


//task 8

stdname=["Michael","John","Tony"]
score=["320","230","480"]

document.write("Score of " +stdname[0]+ " is " +score[0]+". Percentage: " +(score[0]*100/500) + "% <br>");
document.write("Score of " +stdname[1]+ " is " +score[1]+". Percentage: " +(score[1]*100/500) + "% <br>");
document.write("Score of " +stdname[2]+ " is " +score[2]+". Percentage: " +(score[2]*100/500) + "% <br><br><br>");

//task 9
//a
color=["Pink","Blue","Red"] 
  
 document.write("a "+color+"<br><br>"); 
 var a =prompt("Enter color to add in Beginning") 
 color.unshift(a) 
 document.write("a "+color+" <br><br>");

//b
color=["Pink","Blue","Red"] 
  
 document.write("b "+color+"<br><br>"); 
 var a =prompt("Enter color to add in End") 
 color.push(a) 
 document.write("b "+color+" <br><br><br>");

//c
color=["Pink","Blue","Red"] 
  
 document.write("c "+color+"<br><br>"); 
 var a =prompt("Enter color to two more add in Beginning") 
 color.unshift(a) 
 document.write("c "+color+" <br><br>");

//d
color=["Pink","Blue","Red"] 
  
 document.write("d "+color+"<br><br>"); 
 var a =prompt("Delete the First color array ") 
 color.shift(a) 
 document.write("d "+color+" <br><br>");

 //e
 color=["Pink","Blue","Red"] 
  
 document.write("e "+color+"<br><br>"); 
 var a =prompt("Delete the last color array") 
 color.pop(a) 
 document.write("e "+color+" <br><br>");

//f
color=["Pink","Blue","Red"] 
var pos=0 
 pos=prompt("Enter index to add") 
 temp=prompt("enter color") 
 color.splice(pos,0,temp) 
 document.write("f "+color) 



//task 10

sstd =[320,230,480,120]
ostd=[120,230,320,480]


document.write("Scores of Students: " +sstd[0]+ "," +sstd[1]+ "," +sstd[2]+ "," +sstd[3]+ "<br><br><br>");
document.write("Ordered Score of Students: " +ostd[0]+ "," +ostd[1]+ "," +ostd[2]+ "," +ostd[3]+ "<br><br><br><br>");



//task 11

var citylists=["Karachi","Lahore","Islamabad","Quetta","Peshawer"]
document.write("Cities list: " +citylists+ "<br><br>");
var a  = citylists.slice(2,4)
document.write("Selected cities list: <br>" +a+ "<br><br><br>");

//task 12

var arr = ["This" ,  "is", " my ",  "cat"];
document.write("<h2> Array: <br>" +arr+ "<br></h2>");

var str = ["This  is  my   cat"];
document.write("<h2><br><br> String: <br>" +str+ "</h2>");



// task 13

var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"]; 
 document.write("Devices <br>" +arr+"<br><br>") 
  
     w = arr.shift(0);
     x = arr.shift(1);
     y = arr.shift(2);
     z = arr.shift(3);

     document.write("Out : <br>" +w+"<br>");
     document.write("Out : <br>" +x+"<br>");
     document.write("Out : <br>" +y+"<br>");
     document.write("Out : <br>" +z+"<br>");
  
 


 // task 14

 var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"]; 
 document.write("Devices <br>" +arr+"<br><br>") 
  
     w = arr.pop(0);
     x = arr.pop(1);
     y = arr.pop(2);
     z = arr.pop(3);

     document.write("Out : <br>" +w+"<br>");
     document.write("Out : <br>" +x+"<br>");
     document.write("Out : <br>" +y+"<br>");
     document.write("Out : <br>" +z+"<br>");
  
 
 
  



 // task 15
 var arr =  ["Apple", "Samsung", " Motorola", "Nokia"," Sony" , "Haier"]
 
    document.write(arr[0] +"<br>")    
    document.write(arr[1] +"<br>")    
    document.write(arr[2] +"<br>")    
    document.write(arr[3] +"<br>")    
 
