var input = document.createElement("input")
input.setAttribute("id", "firstName")
input.setAttribute("type", "text")
input.setAttribute("placeholder", "Enter Your First Name")
document.body.appendChild(input)

var input1 = document.createElement("input")
input1.setAttribute("id", "lastName")
input1.setAttribute("type", "text")
input1.setAttribute("placeholder", "Enter Your Last Name")
document.body.appendChild(input1)

var input2 = document.createElement("input")
input2.setAttribute("id", "Email")
input2.setAttribute("type", "text")
input2.setAttribute("placeholder", "Enter Your Email Id")
document.body.appendChild(input2)

var input3 = document.createElement("input")
input3.setAttribute("id", "mobileNumber")
input3.setAttribute("type", "text")
input3.setAttribute("placeholder", "Enter Your MobileNumber")
document.body.appendChild(input3)

var button = document.createElement("button")
button.innerHTML = "save"
button.setAttribute("id", "save")
document.body.appendChild(button)

var table = document.createElement("table")
table.setAttribute("border", "1")
document.body.appendChild(table)
var thead = document.createElement("thead")
table.appendChild(thead)
var th = document.createElement("th")
th.innerHTML = "firstName"
thead.appendChild(th)
var th1 = document.createElement("th")
th1.innerHTML = "lastName"
thead.appendChild(th1)
var th2 = document.createElement("th")
th2.innerHTML = "Email"
thead.appendChild(th2)
var th3 = document.createElement("th")
th3.innerHTML = "mobileNumber"
thead.appendChild(th3)
var tbody = document.createElement("tbody")
table.appendChild(tbody)

function mobileValidate() {
    var text = document.getElementById("mobileNumber").value;
    var regx = /^[7-9]\d{9}/;
    if (regx.test(text)) {
        document.getElementById("mobileNumber").innerHTML = "Valid";
        document.getElementById("mobileNumber").style.visibility = "visible";
        document.getElementById("mobileNumber").style.color = "green";
    }
    else {
        document.getElementById("mobileNumber").innerHTML = "Invalid";
        document.getElementById("mobileNumber").style.visibility = "visible";
        document.getElementById("mobileNumber").style.color = "red";

    }
}

function emailValidate() {
    var text = document.getElementById("Email").value;
    var regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regx.test(text)) {
        document.getElementById("Email").innerHTML = "Valid";
        document.getElementById("Email").style.visibility = "visible";
        document.getElementById("Email").style.color = "green";
        return 1
    }
    else {
        document.getElementById("Email").innerHTML = "Invalid";
        document.getElementById("Email").style.visibility = "visible";
        document.getElementById("Email").style.color = "red";
        return 0
    }
}

var array = []
function storeValues() {
    array[0] = document.getElementById("firstName").value;
    array[1] = document.getElementById("lastName").value;
    array[2] = document.getElementById("Email").value;
    array[3] = document.getElementById("mobileNumber").value;

}

document.getElementById("save").onclick = function acceptValue() {

    storeValues()


    if (array[0] === "" || array[1] === "" || array[2] === "" || array[3] === "") {
        alert("please enter the correct values")
    } else if (!mobileValidate() && !emailValidate()) {
        alert("please enter the valid Mobile Number or Email ID")
    }
    else {
        var table1 = document.getElementById("table");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = array[0];
        cell2.innerHTML = array[1];
        cell3.innerHTML = array[2];
        cell4.innerHTML = array[3];
    }
}

