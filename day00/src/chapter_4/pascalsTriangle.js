// Напишите функцию, которая будет принимать координаты числа в треугольника Паскаля и будет возвращать значение по координатам.
// Если вы не знаете, что такое треугольник Паскаля, советую прочитать перед выполнение задания.
// https://cdn.fishki.net/upload/post/201502/04/1414683/947eb978f710426fd0702fd119da506b.gif тут можно посмотреть наглядно принцип работы.
// Предположим, что начальные координаты 0,0.
// Тут, возможно, поможет рекурсия.

function Fact(num) {
    if (num < 0) {
        return 0;
    } else if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * Fact(num - 1);
    }
}

function paskalsTriangle(x, y) {
    return Fact(x) / Fact(y) * Fact(x - y);
}


console.log(paskalsTriangle(3,2)); // 3
console.log(paskalsTriangle(5,4)); // 5
console.log(paskalsTriangle(1,1)); // 1