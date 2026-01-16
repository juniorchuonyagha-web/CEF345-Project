// Load accounts from localStorage or create empty
let accounts = JSON.parse(localStorage.getItem("cashpath_accounts")) || {};

// Switch to create account form
function showCreateForm() {
    document.getElementById("form-title").innerText = "Create Account";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("createBtn").style.display = "block";

    document.querySelectorAll(".switch")[0].style.display = "none";
    document.querySelectorAll(".switch")[1].style.display = "block";
}

// Switch to login form
function showLoginForm() {
    document.getElementById("form-title").innerText = "Login";
    document.getElementById("loginBtn").style.display = "block";
    document.getElementById("createBtn").style.display = "none";

    document.querySelectorAll(".switch")[0].style.display = "block";
    document.querySelectorAll(".switch")[1].style.display = "none";
}

// Create new account
function createAccount() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    if (accounts[username]) {
        alert("Username already exists.");
        return;
    }

    accounts[username] = password;
    localStorage.setItem("cashpath_accounts", JSON.stringify(accounts));

    alert("Account created! Please login.");
    showLoginForm();
}

// Login
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!accounts[username]) {
        alert("Account not found.");
        return;
    }

    if (accounts[username] !== password) {
        alert("Incorrect password.");
        return;
    }

    localStorage.setItem("cashpathUser", username);
    window.location.href = "index.html";
}
