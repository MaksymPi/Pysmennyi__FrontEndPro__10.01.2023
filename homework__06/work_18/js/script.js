// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.


function calc(numbers) {
  let filterNumbers = numbers.filter(el => typeof el === "number");
  let rez = filterNumbers.reduce((sum, curr) => (sum + curr) / filterNumbers.length)
  return rez
}
console.log(calc([4, 16, '25', 'Bob']));



// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


function doMath(x, znak, y) {
  if (znak == '+') {
      console.log(x + y);
  } else if (znak == '-') {
      console.log(x - y);
  } else if (znak == '*') {
      console.log(x * y);
  } else if (znak == '/') {
      console.log(x / y);
  } else if (znak == '%') {
      console.log(x % y);
  } else if (znak == '^') {
      console.log(x ** y);
  }
}
doMath(2, '^', 3)

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const arrayLengthBasic = prompt('Введіть довжину першого масивів');
const arrayLengthInside = prompt('Введіть довжину другого масивів');
const bigArray = [];
function getArr(Basic,Inside) {
  for (let i = 0; i < arrayLengthBasic; i++){
  const arrayBasic = [];
  for (let j = 0; j < arrayLengthInside; j++) {
      const elementInside = prompt(`Введіть значенн внутрішніх масивів ${j}`)
      arrayBasic.push(elementInside);
}
  bigArray.push(arrayBasic);
  }
  return bigArray;
}
console.log(getArr(arrayLengthBasic,arrayLengthInside));



// Створиті фанкцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteStr(str, arr) {
  let arrStr = str.split('');
  arrStr.forEach(function (item, index) {
      arrStr = arrStr.filter((item) => {
          return item !== arr[index];
      });
  });

  return arrStr.join('');
}
console.log(deleteStr("hello world", ['l', 'd'])); 