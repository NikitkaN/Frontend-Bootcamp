// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате: {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  const banknotes = [5000, 2000, 1000, 500, 200, 100, 50];
  let a = 0;
  let dict = new Map([
      [5000, 0],
      [2000, 0],
      [1000, 0],
      [500, 0],
      [200, 0],
      [100, 0],
      [50, 0]
  ]);

  banknotes.forEach(function (element) {
      while (sum >= element) {
          dict.set(element, dict.get(element) + 1)
          sum -= element
          a++;
      }
  })

  banknotes.forEach(function (element) {
      if (dict.get(element) == 0) dict.delete(element)
  })

  if (a > 20) return 'Limit exceeded'
  else if (sum != 0) return 'Incorrect value'
  return dict;
}

console.log(atm(8350)); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)); // Incorrect value
console.log(atm(100050)); // Limit exceeded


