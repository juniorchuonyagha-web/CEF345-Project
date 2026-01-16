document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("cashpathUser");
    if (!user) {
        window.location.href = "login.html";
    } else {
        document.getElementById("welcome").innerText = `WELCOME, ${user}!`;
    }
});

function logout() {
    localStorage.removeItem("cashpathUser");
    window.location.href = "login.html";
}

let expenses = [];

let income = [];

document.getElementById("add-btn").addEventListener("click", () => {
    const name = document.getElementById("expense-name").value;
    const amount = Number(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    expenses.push({ name, amount, category });
    updateExpenseTable();
    updateBalance();

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
});

document.getElementById("add-income-btn").addEventListener("click", () => {
    const name = document.getElementById("income-name").value;
    const amount = Number(document.getElementById("income-amount").value);
    const category = document.getElementById("income-category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter valid income details.");
        return;
    }

    income.push({ name, amount, category });
    updateIncomeTable();
    updateBalance();

    document.getElementById("income-name").value = "";
    document.getElementById("income-amount").value = "";
});

// Update expense table
function updateExpenseTable() {
    const table = document.getElementById("expense-table");
    table.innerHTML = "";
    expenses.forEach(exp => {
        const row = `<tr>
            <td>${exp.name}</td>
            <td>${exp.amount} FCFA</td>
            <td>${exp.category}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

// Update income table
function updateIncomeTable() {
    const table = document.getElementById("income-table");
    table.innerHTML = "";
    income.forEach(inc => {
        const row = `<tr>
            <td>${inc.name}</td>
            <td>${inc.amount} FCFA</td>
            <td>${inc.category}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

// Update total balance
function updateBalance() {
    const totalIncome = income.reduce((sum, inc) => sum + inc.amount, 0);
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const balance = totalIncome - totalExpenses;

    const totalElem = document.getElementById("total");
    totalElem.textContent = balance;
    totalElem.style.color = balance >= 0 ? "green" : "red";
}
