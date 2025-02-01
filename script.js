document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    if (!username) {
        document.getElementById('username-error').textContent = 'Username is required';
        return;
    }

    if (!password) {
        document.getElementById('password-error').textContent = 'Password is required';
        return;
    }

    document.getElementById('user-name').textContent = username;
    document.getElementById('user-full-name').textContent = username;

    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.style.opacity = 1;
    notification.style.transform = 'translateY(0)';

    setTimeout(() => {
        notification.style.opacity = 0;
        notification.style.transform = 'translateY(-50px)';
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 500);
    }, 3000);

    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});
