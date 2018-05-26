// JavaScript source code

function insertTask() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length - 1);
    row.insertCell(0).innerHTML = document.getElementById("newTask").value
    row.insertCell(1).innerHTML = document.getElementById("descTask").value
    row.insertCell(2).innerHTML = document.getElementById("impTask").value
    row.insertCell(3).innerHTML = document.getElementById("dateTask").value
    var btn = document.createElement("BUTTON");
    btn.name = "removeTask";
    btn.innerHTML = "Remove";
    btn.type = "button";
    btn.setAttribute("onClick", "removeTasks(this)");
    row.insertCell(4).appendChild(btn);
}

function removeTasks(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

