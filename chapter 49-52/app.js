// Chapter 49-52

// Task 1
function submitbtn(){
    var f = document.getElementById("formsubmit");
    f.className = "hidden";
    var tables = document.getElementById("tables");
    tables.className="";
   
    var name = document.getElementById("name");
    var a = name.value;
    var name1 = document.getElementById("name1");
     name1.innerHTML = a;
 

    var mobile = document.getElementById("mobile");
    var mobile1 = document.getElementById("mobile1");
    var m = mobile.value;
    mobile1.innerHTML = m;
    


    var qualification = document.getElementById("qualification");
    var q = qualification.value;
    var qualification1 = document.getElementById("qualification1");
    qualification1.innerHTML = q;

    var address = document.getElementById("address");
    var ad = address.value;
    var address1 = document.getElementById("address1");
    address1.innerHTML = ad;

    
    var email = document.getElementById("email");
    var email1 = document.getElementById("email1");
     email1.innerHTML = email.value;
}


// Task 2
 function seemore(){          
var text =   "Generally, data mining (sometimes called data or knowledge discovery) is the process of analyzing data from different perspectives and summarizing it into useful information - information that can be used to increase revenue, cuts costs, or both. Data mining software is one of a number of analytical tools for analyzing data. It allows users to analyze data from many different dimensions or angles, categorize it, and summarize the relationships identified. Technically, data mining is the process of finding correlations or patterns among dozens of fields in large relational databases"
var para = document.getElementById('paragraph')
para.innerHTML = text

}

//task 3


var saveId = "";
function deleteRow(rowId){
    var delRow = document.getElementById(rowId);
    delRow.innerHTML =""
}
function edit(rowId){
    var editField = document.getElementById("editField");
    editField.className = "";
    var r = document.getElementById(rowId);
    var val = r.getElementsByTagName('td');
    console.log(val[1].innerHTML);
    var a = val[1].innerHTML;
    var b = val[2].innerHTML;
    var inpValue = editField.getElementsByTagName('input');
    inpValue[0].value = a;
    inpValue[1].value = b;
    saveId = rowId;
    console.log(saveId)
}
console.log(saveId)
function save(saveId){
    var editField = document.getElementById("editField");
    var inpValue = editField.getElementsByTagName('input');
    a = inpValue[0].value;
    b = inpValue[1].value; 
    console.log(saveId);
    var r = document.getElementById(saveId);
    var val = r.getElementsByTagName('td');
    val[1].innerHTML =a;
    val[2].innerHTML =b;

    
    
     editField.className = "hidden";
}

function cancel() {
    var editField = document.getElementById("editField");
    editField.className = "hidden";
}