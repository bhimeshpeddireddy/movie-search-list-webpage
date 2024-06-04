

// Sign Up function
function signUp() {
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another.");
        return;
    }

    localStorage.setItem(username, password);
    alert("User registered successfully. You can now sign in.");
}

// Sign In function
function signIn() {
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === null) {
        alert("User not found. Please sign up first.");
    } else if (storedPassword === password) {
        alert("Sign in successful!");
    } else {
        alert("Incorrect password. Please try again.");
    }
}
