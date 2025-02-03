document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login (replace with actual authentication logic)
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        // Redirect to the main application
    } else {
        alert('Invalid credentials!');
    }
});