document.addEventListener('DOMContentLoaded', () => {
    const userElement = document.getElementById('user');
    const logoutButton = document.getElementById('logout');

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = 'index.html';
    } else {
        userElement.textContent = loggedInUser;
    }

    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
});
