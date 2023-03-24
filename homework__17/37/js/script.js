const table = document.createElement("table");
const body = document.getElementById("tableid")
let counter = 1;
for (let i = 0; i < 10; i++) {
  let tbRow = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    let tdCell = document.createElement("td");
    tdCell.textContent = counter;
    tbRow.append(tdCell);
    counter++;
  }
  table.append(tbRow);
}

body.append(table);
