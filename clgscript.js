document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('user').value.trim();
        const password = document.getElementById('pass').value.trim();

        let errorMessage = '';
        if (username === '') {
            errorMessage += 'Username is required.\n';
        }

        if (password === '') {
            errorMessage += 'Password is required.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            window.location.href = 'page2.html';
        }
    });
});
