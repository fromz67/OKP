function isIndexPage() {
    const p = window.location.pathname;
    return p.endsWith('index.html') || p === '/' || p === '';
}

function dialogWithUser() {
    alert("Ласкаво просимо на сайт!");
    let name;
    do {
        name = prompt("Як вас звати?");
        if (!name) {
            alert("Ім'я не введено! Спробуйте ще раз.");
        }
    } while (!name);

    const proceed = confirm("Продовжити?");
    if (!proceed) {
        alert("До побачення!");
        return false;
    }

    const times = parseInt(prompt("Скільки разів вивести привітання?"), 10) || 1;
    for (let i = 0; i < times; i++) {
        alert(`Привіт, ${name}!`);
    }

    if (confirm("Перейти на Google?")) {
        redirectTo('https://www.google.com');
    }
    return true;
}

function showDeveloperInfo(surname, firstname, position = "Розробник") {
    alert(`Розробник: ${surname} ${firstname}, Посада: ${position}`);
}

function compareStrings(str1, str2) {
    const result = str1.localeCompare(str2);
    if (result > 0) {
        alert(`Більший рядок: ${str1}`);
    } else if (result < 0) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert(`Рядки однакові: ${str1}`);
    }
}

function temporaryBackgroundChange(color, durationMs) {
    const original = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    setTimeout(() => {
        document.body.style.backgroundColor = original;
    }, durationMs);
}

function redirectTo(url) {
    location.href = url;
}

// Динамічний текст у .sidebar
function dynamicText() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    const newPara = document.createElement('p');
    newPara.textContent = 'Цей абзац додано за допомогою document.write()';
    sidebar.appendChild(newPara);
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Цей текст створено динамічно.';
    sidebar.appendChild(newDiv);
}

// getElementById та querySelectorAll
function demoDOM() {
    const header = document.getElementById('uniqueHeader');
    if (header) {
        console.log('innerHTML:', header.innerHTML);
        console.log('outerHTML:', header.outerHTML);
        console.log('textContent:', header.textContent);
        if (header.firstChild) {
            console.log('nodeValue:', header.firstChild.nodeValue);
            console.log('data:', header.firstChild.data);
        }
        header.style.border = '2px solid gray';
    }
    document.querySelectorAll('.sidebar a').forEach(a => a.style.fontStyle = 'italic');
}

// createElement, append, prepend тощо
function demoDOMManipulation() {
    const mainPara = document.querySelector('.content > p');
    if (!mainPara) return;
    mainPara.prepend('Вітаю! ');
    mainPara.append(' *Навігація знаходиться зліва.');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode('*Виконав Владислав Тимчук.'));
    mainPara.append(div);
    const hr = document.createElement('hr');
    mainPara.after(hr);
    const newSection = document.createElement('section');
    newSection.textContent = 'Не забудьте залишити відгук!';
    hr.replaceWith(newSection);
    setTimeout(() => newSection.remove(), 5000);
}

function runDialogs() {
    if (!dialogWithUser()) return;
    showDeveloperInfo('Tymchuk', 'Vladyslav');
    compareStrings('Телефон', 'ПК');
    // Після успішних діалогів запускаємо інші скрипти
    temporaryBackgroundChange('rgba(0, 123, 255, 0.2)', 30000);
    dynamicText();
    demoDOM();
    demoDOMManipulation();
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('startDialog');
    if (btn) btn.addEventListener('click', runDialogs);
});
