// PUBLIC USERNAME & PASSWORD
const validUsername = "admin";
const validPassword = "1234";

function showWelcome() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (user === validUsername && pass === validPassword) {
        document.getElementById("login").classList.remove("active");
        document.getElementById("welcome").classList.add("active");
        error.textContent = "";
    } else {
        error.textContent = "Invalid Username or Password";
    }
}

function showMenu() {
    document.getElementById("welcome").classList.remove("active");
    document.getElementById("menu").classList.add("active");
}

function goBack() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("login").classList.add("active");
}