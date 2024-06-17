document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    registerForm.addEventListener('submit', registerUser);
    loginForm.addEventListener('submit', loginUser);

    function registerUser(event) {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        if (localStorage.getItem(username)) {
            alert('User already exists!');
        } else {
            const hashedPassword = hashPassword(password);
            localStorage.setItem(username, hashedPassword);
            alert('User registered successfully!');
        }
        registerForm.reset();
    }

    function loginUser(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const storedPassword = localStorage.getItem(username);
        if (storedPassword && verifyPassword(password, storedPassword)) {
            alert('Login successful!');
            sessionStorage.setItem('loggedInUser', username);
            window.location.href = 'secured.html';
        } else {
            alert('Invalid username or password!');
        }
        loginForm.reset();
    }

    function hashPassword(password) {
        return btoa(password); // Simple Base64 encoding for illustration purposes
    }

    function verifyPassword(password, hashedPassword) {
        return btoa(password) === hashedPassword;
    }
});
