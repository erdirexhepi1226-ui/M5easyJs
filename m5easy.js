function checkUsername() {
    let username = document.getElementById("username").value;
    let regex = /^[a-zA-Z0-9_]{3,16}$/;

    if (regex.test(username)) {
        document.getElementById("result").textContent = "Valid username!";
    } else {
        document.getElementById("result").textContent = "Invalid username!";
    }
}