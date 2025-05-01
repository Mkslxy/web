// Завдання 1
function task1() {
    let a = 0, b = 1, sum = a + b;
    let count = 2;
    while (count < 10) {
        let next = a + b;
        sum = sum + next;
        a = b;
        b = next;
        count = count + 1;
    }
    console.log('Завдання 1: Сума перших 10 чисел Фібоначчі =', sum);
}
task1();

// Завдання 2
function task2() {
    let sum = 0;
    for (let i = 2; i <= 1000; i = i + 1) {
        let isPrime = true;
        for (let j = 2; j < i; j = j + 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sum = sum + i;
        }
    }
    console.log('Завдання 2: Сума простих чисел від 1 до 1000 =', sum);
}
task2();

// Завдання 3
function task3() {
    let number = parseInt(prompt('Введіть число від 1 до 7:'));
    let day;
    switch (number) {
        case 1:
            day = 'Понеділок';
            break;
        case 2:
            day = 'Вівторок';
            break;
        case 3:
            day = 'Середа';
            break;
        case 4:
            day = 'Четверг';
            break;
        case 5:
            day = 'П’ятниця';
            break;
        case 6:
            day = 'Субота';
            break;
        case 7:
            day = 'Неділя';
            break;
        default:
            day = 'Некоректне число';
    }
    console.log('Завдання 3: День тижня =', day);
}
task3();

// Завдання 4
function task4(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + 1) {
        let str = arr[i];
        if (str.length % 2 !== 0) {
            newArr[newArr.length] = str;
        }
    }
    console.log('Завдання 4: Масив рядків з непарною довжиною =', newArr);
}
task4(['яблуко', 'груша', 'слива', 'банан', 'ківі']);

// Завдання 5
const task5 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + 1) {
        newArr[newArr.length] = arr[i] + 1;
    }
    console.log('Завдання 5: Масив збільшений на 1 =', newArr);
};
task5([1, 2, 3, 4, 5]);

// Завдання 6
function task6(a, b) {
    let result;
    if (a + b === 10 || a - b === 10 || b - a === 10) {
        result = true;
    } else {
        result = false;
    }
    console.log('Завдання 6: Результат =', result);
}
task6(7, 3);
task6(20, 5);
