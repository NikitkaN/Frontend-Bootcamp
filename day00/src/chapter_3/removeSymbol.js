// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения.

function removeString(message, symbol) {
    let string = "";
    let arr = message.split(symbol);

    for (let elem of arr) {
        string += elem;
    }

    return string;
}

console.log(removeString("Большое и интересное сообщение", "о")); // Бльше и интересне сбщение
console.log(removeString("Hello world!", "z")); // Hello world!
console.log(removeString("А роза азора", "А")); // роза азора


