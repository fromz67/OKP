window.addEventListener('DOMContentLoaded', () => {
    let username;
    do {
        username = prompt('Введіть ваше ім’я користувача:');
    } while (!username || !username.trim());
    username = username.trim();

    const acceptTerms = confirm(`Ви згодні з умовами використання, ${username}?`);
    if (!acceptTerms) {
        window.location.href = 'index.html?retry=true';
        return;
    }

    userDialog(username);

    window.location.href = 'index.html';
});
