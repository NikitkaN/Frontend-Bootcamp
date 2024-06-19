const output = document.querySelector('.output p');

let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = [];
for (let i = 0; i < 10; i++) {
    digit[i] = String(i);
}
digit[10] = '.';

const action = ['-', '+', 'X', '/'];

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    output.textContent = 'Result';
}
document.getElementById('C').onclick = clearAll;

function Calc(symbol) {
    while (a.length <= 15 && b.length <= 15) {
        output.textContent = '';

        const key = symbol;

        if (digit.includes(key)) {
            if (b === '' && sign === '') {
                a += key;
                output.textContent = a;
            } else if (a !== '' && b !== '' && finish) {
                b = key;
                finish = false;
                output.textContent = b;
            } else {
                b += key;
                output.textContent = b;
            }
            console.log(a, b, sign);
            return;
        }

        if (action.includes(key)) {
            sign = key;
            output.textContent = sign;
            console.log(a, b, sign);
            return;
        }

        if (key === '=') {
            if (b === '') b = a;
            switch (sign) {
                case "+":
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "X":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        output.textContent = 'Error';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
            }
            finish = true;
            output.textContent = a;
            console.table(a, b, sign);
        }
    }
}