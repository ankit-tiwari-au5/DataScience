var h1 = document.createElement("h1")
h1.innerHTML = "Numbers and Squares"
document.body.appendChild(h1)

var table = document.createElement("table")
table.setAttribute("border", '')
table.setAttribute("id", "table1")
table.setAttribute("class", "table table-striped")
document.body.appendChild(table)



var thead = document.createElement("thead")
table.appendChild(thead)

var tbody = document.createElement("tbody")
table.appendChild(tbody)

var th = document.createElement("th")
th.innerHTML = "Number"
thead.appendChild(th)

var th1 = document.createElement("th")
th1.innerHTML = "Squares"
thead.appendChild(th1)



var table = document.getElementById("table1");

for (i = 0; i < 10; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = i + 1
    cell2.innerHTML = (i + 1) * (i + 1)
}