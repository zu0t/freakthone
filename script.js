document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;

    if (!username) {
        alert('Username is required');
        return;
    }

    document.getElementById('user-name').textContent = username;

    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.textContent = '✅ Successfully logged in!';
    notification.classList.add('hidden');

    document.body.appendChild(notification);

    notification.classList.remove('hidden');
    notification.style.opacity = 1;
    notification.style.transform = 'translateY(0)';

    setTimeout(() => {
        notification.style.opacity = 0;
        notification.style.transform = 'translateY(-50px)';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
});
const ctx = document.getElementById('activityChart').getContext('2d');
        const activityChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'User Activity',
                    data: [120, 190, 300, 500, 200, 300, 400],
                    borderColor: '#5323ff',
                    backgroundColor: 'rgba(83, 35, 255, 0.2)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#fff'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#fff'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#fff'
                        }
                    }
                }
            }
        });
