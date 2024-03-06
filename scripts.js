document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Đăng nhập thành công!');
        window.location.href = 'Main page/index.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Mật khẩu không khớp.');
        return;
    }

    // Temporarily save user data for demo
    const user = {
        username: newUsername,
        email: newEmail,
        password: newPassword
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Đăng ký thành công!');
});