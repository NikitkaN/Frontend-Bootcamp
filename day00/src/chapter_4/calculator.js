// Вам надо набор функций который будет симулировать работу калькулятора.
// Для этого вам надо написать 9 функций, которые могут принимать в качестве аргумента другую функцию, если функция передана, то надо вернуть вызов функции с числом n, иначе вернуть число n.
// Например, функция one может принять в качестве аргумента функцию sum, тогда в return будет sum(1).Если же в функцию не передали ничего, то она просто вернет 1.
// Также надо написать 4 функции основных арифмитических операторов, которые принимают в качестве аргумента первое число, а возвращают функцию, которая принимает в качестве аргумента второе число и возвращает их сумму/разность/частое/произведение.

function one(callback) {
    if (callback) {
        return callback(1);
    }
    return 1;
}
function two(callback) {
    if (callback) {
        return callback(2);
    }
    return 2;
}
function three(callback) {
    if (callback) {
        return callback(3);
    }
    return 3;
}
function four(callback) {
    if (callback) {
        return callback(4);
    }
    return 4;
}
function five(callback) {
    if (callback) {
        return callback(5);
    }
    return 5;
}
function six(callback) {
    if (callback) {
        return callback(6);
    }
    return 6;
}
function seven(callback) {
    if (callback) {
        return callback(7);
    }
    return 7;
}
function eight(callback) {
    if (callback) {
        return callback(8);
    }
    return 8;
}
function nine(callback) {
    if (callback) {
        return callback(9);
    }
    return 9;
}

function plus(a) {
    return function(b) {
        return a + b;
    }
}

function minus(a) {
    return function(b) {
        return a - b;
    }
}

function divide(a) {
    return function(b) {
        return a / b;
    }
}

function mult(a) {
    return function(b) {
        return a * b;
    }
}

console.log(four()); // В итоге вернётся 4
console.log(five(mult(three()))); // В итоге вернётся 15
console.log(one(mult(three(plus(four()))))); // В итоге вернется 7