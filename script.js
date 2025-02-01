document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    document.getElementById('user-name').textContent = username;
    document.getElementById('user-full-name').textContent = username;
    
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});