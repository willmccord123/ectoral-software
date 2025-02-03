const progressBar = document.getElementById('loading-bar');
const loginButton = document.getElementById('login-button');

let progress = 0;

const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
        clearInterval(interval);
        loginButton.classList.remove('hidden');
        loginButton.querySelector('button').style.opacity = '1';
    }
}, 500);

function showLogin() {
    window.location.href = 'login.html';
}