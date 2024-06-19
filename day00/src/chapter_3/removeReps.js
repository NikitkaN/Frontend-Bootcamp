// Вам нужно написать функцию которая принимает в качестве аргумента массив чисел и удаляет все повторяющиеся значения.

function removeReps(array) {
    for (let i = 0; i < array.length; i++) {
        let num = i + 1;
        while (num < array.length) {
            if (array[i] === array[num]) {
                array.splice(num, 1);
                num--;
            }
            num++;
        }
    }

    return array;
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
console.log(removeReps([1,1,1,1])); // [1]
console.log(removeReps([1,2,3,4,5,6])); // [1,2,3,4,5,6]