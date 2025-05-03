 document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('retry') === 'true') {
    alert('Вам потрібно погодитися з умовами використання, повторіть спробу.');
    history.replaceState(null, '', window.location.pathname);
}

    // alert(
    //     'Інформація про розробника сторінки:\n' +
    //     'Прізвище: Tymchuk\n' +
    //     'Ім\'я: Vladyslav\n' +
    //     'Посада: Розробник'
    // );

    // Додати підказку після блоку
    const compBlock = document.querySelector('.comparison-block');
    const tip = document.createElement('div');
    tip.id = 'tip';
    tip.textContent = 'Порада: завжди перевіряйте сумісність процесора та материнської плати!';
    compBlock.after(tip);

    // Додати список корисних порад у сайдбар
    const sidebar = document.querySelector('.sidebar');
    const adviceList = document.createElement('ul');
    ['Оновлюйте драйвери.', 'Слідкуйте за температурою.', 'Регулярно чистіть систему.']
    .forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    adviceList.appendChild(li);
});
    sidebar.appendChild(adviceList);
});






