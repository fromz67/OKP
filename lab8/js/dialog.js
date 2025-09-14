function userDialog(userName) {
    let age;
    do {
        age = prompt(`${userName}, будь ласка, введіть ваш вік (ціле число):`);
        age = parseInt(age, 10);
    } while (isNaN(age) || age <= 0);

    if (age < 18) {
        alert('Вибачте, реєстрація лише для повнолітніх.');
        return;
    } else {
        alert(`Дякуємо, ${userName}! Вам ${age} років, реєстрація продовжується.`);
    }

    const interests = [];
    let count = 0;
    while (count < 3) {
        const interest = prompt('Введіть одну з ваших трьох улюблених тем про комп’ютери:');
        if (interest && interest.trim()) {
            interests.push(interest.trim());
            count++;
        } else {
            alert('Будь ласка, введіть непустий рядок.');
        }
    }

    let summary = `Реєстраційні дані:\nІм’я: ${userName}\nВік: ${age}\nІнтереси:\n`;
    interests.forEach((itm, idx) => {
        summary += `${idx + 1}. ${itm}\n`;
    });

    alert(summary);
}

window.userDialog = userDialog;
