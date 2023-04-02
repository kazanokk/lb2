let counter = 0;
let intervalId;

function start() {
    const interval = document.getElementById("interval").value;
    intervalId = setInterval(addRow, interval);
}

function stop() {
    clearInterval(intervalId);
}

function addRow() {
    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");
    
    const cell1 = document.createElement("td");
    cell1.textContent = ++counter;
    row.appendChild(cell1);
    
    const cell2 = document.createElement("td");
    cell2.textContent = generateName();
    row.appendChild(cell2);
    
    const cell3 = document.createElement("td");
    cell3.textContent = generateAge();
    row.appendChild(cell3);
    
    const cell4 = document.createElement("td");
    cell4.textContent = generateEmail();
    row.appendChild(cell4);
  // Другий способ змініти колір парних строк
  //   if (counter % 2 === 0) {
  //     row.style.backgroundColor = "#f2f2f2";
  //   }
    
    tableBody.appendChild(row);
}

function generateName() {
    const names = ["Андрій", "Богдан", "Олександр", "Макс", "Дмитро", "Євген", "Юлія", "Аня", "Ірина", "Катерина"];
    return names[Math.floor(Math.random() * names.length)];
}

function generateAge() {
    return Math.floor(Math.random() * 5) + 20;
}

function generateEmail() {
    const domains = ["gmail.com", "ukr.net", "i.ua", "hotmail.com", "proton.com"];
    const login = generateRandomString(5, 10);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${login}@${domain}`;
}

function generateRandomString(minLength, maxLength) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = "";

    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    
    return result;
}
