//Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

let counter = makeCounter();

function makeCounter() {
    let count = -3;
    return function() {
        return count += 3;
    };
}

console.log(counter()); // Функция вернет 0
console.log(counter()); // Функция вернет 3
console.log(counter()); // Функция вернет 6
console.log(counter()); // Функция вернет 9
