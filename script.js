let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

//при вводе максимума или минимума больше 999 или меньше -999 изменяем число на ближайшую границу
minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

// проверка на NaN вводимого значения и присвоение значений по умолчанию
if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
    minValue = 0;
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

// кнопка Заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

    //при вводе максимума или минимума больше 999 или меньше -999 изменяем число на ближайшую границу
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

    // проверка на NaN вводимого значения и присвоение значений по умолчанию
    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
        minValue = 0;
        maxValue = 100;
    }

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})

// кнопка Больше
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число \n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь...\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Вы забыли загаданное число. Начните заново\n\u{1F614}`;
                    break;
                case 3:
                    answerPhrase = `Что-то пошло не так\n\u{1F62C}`;
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали число ${answerNumber}?`;
                    break;
                case 1:
                    answerPhrase = `Я знаю. Это число ${answerNumber}.`;
                    break;
                case 2:
                    answerPhrase = `Скорее всего это число ${answerNumber}`;
                    break;
                case 3:
                    answerPhrase = `\u{1F609}. Это число ${answerNumber}.`;
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

// кнопка Меньше
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue || minValue == answerNumber) {
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число \n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь...\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Вы забыли загаданное число. Начните заново\n\u{1F614}`;
                    break;
                case 3:
                    answerPhrase = `Что-то пошло не так\n\u{1F62C}`;
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали число ${answerNumber}?`;
                    break;
                case 1:
                    answerPhrase = `Я знаю. Это число ${answerNumber}.`;
                    break;
                case 2:
                    answerPhrase = `Скорее всего это число ${answerNumber}`;
                    break;
                case 3:
                    answerPhrase = `\u{1F609}. Это число ${answerNumber}.`;
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

// кнопка Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 3);
        switch (phraseRandom) {
            case 0:
                answerPhrase = `Это было легко\n\u{1F60E}`;
                break;
            case 1:
                answerPhrase = `Я всегда угадываю\n\u{1F973}`;
                break;
            case 2:
                answerPhrase = `Я просто мастер\n\u{1F929}`;
                break;
            case 3:
                answerPhrase = `Давай что-нибудь посложнее\n\u{1F971}`;
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

