
/*Напишіть функцію map(fn, array), яка приймає на вхід функцію та масив,
та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.
*/

function fnArr(num) {
  return num + num;
}

function maps(fn, array) {
  let arrNew = [];
  for (let i = 0; i < array.length; i++) {
    arrNew.push(fnArr(array[i]));
  }
  return arrNew;
}

console.log(maps(fnArr, [1, 2, 3, 4, 5]));

/*
Перепишіть функцію за допомогою оператора '?' або '||'
Наступна функція повертає true, якщо параметр age більше 18. 
В іншому випадку вона ставить запитання confirm і повертає його результат.

function checkAge(age) {
  if (age > 18) {
  return true;
  } else {
  return confirm('Батьки дозволили?');
  }
}
*/

// function checkAge(age) {
//   return (age >= 18) || confirm('Родители разрешили?');
// }
// console.log(checkAge(22));

// function checkAge(age) {
//   return age >= 18 ? true : confirm('Родители разрешили?');
// }
// console.log(checkAge(17));