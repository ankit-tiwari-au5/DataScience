var input = document.createElement("input")
input.setAttribute("id", "n1")
input.setAttribute("type", "number")
document.body.appendChild(input)

var input = document.createElement("input")
input.setAttribute("id", "n2")
input.setAttribute("type", "number")
document.body.appendChild(input)

var input = document.createElement("input")
input.setAttribute("id", "demo")
input.setAttribute("type", "number")
document.body.appendChild(input)



var button = document.createElement("button")
button.innerHTML = "+"
button.setAttribute("id", "+")
document.body.appendChild(button)

var button = document.createElement("button")
button.innerHTML = "-"
button.setAttribute("id", "-")
document.body.appendChild(button)

var button = document.createElement("button")
button.innerHTML = "*"
button.setAttribute("id", "*")
document.body.appendChild(button)

var button = document.createElement("button")
button.innerHTML = "/"
button.setAttribute("id", "/")
document.body.appendChild(button)
function addData() {
    var a = parseInt(document.getElementById("n1").value);
    var z = parseInt(document.getElementById("n2").value);
    var x = a + z;
    document.getElementById("demo").value = x;
}
function subtractData() {
    var a = parseInt(document.getElementById("n1").value);
    var z = parseInt(document.getElementById("n2").value);
    var x = a - z;
    document.getElementById("demo").value = x;
}
function multiplyData() {
    var a = parseInt(document.getElementById("n1").value);
    var z = parseInt(document.getElementById("n2").value);
    var x = a * z;
    document.getElementById("demo").value = x;
}
function divideData() {
    var a = parseInt(document.getElementById("n1").value);
    var z = parseInt(document.getElementById("n2").value);
    var x = a / z;
    document.getElementById("demo").value = x;
}
