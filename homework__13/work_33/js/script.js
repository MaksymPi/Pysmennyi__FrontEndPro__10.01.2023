// 1) Избавится от неуникальных элементов массива

const numbersArray = [1,1,2,3,4,5,5,5,6];
let set = new Set(numbersArray);
console.log(set);

for (let value of set) 
console.log(value);;

function filter(arr) {
  return Array.from(new Set(numbersArray));
}
console.log(filter(numbersArray));

// 2) Создать Map который будет по переданному объекту возвращать строку привествия

const userBob = {name: 'Bob'};
const userJane = { name: 'Jane'};

function greetUser(user){
  const map = new Map();
  const mapJane = map.set(userJane, 'How your kids doing Jane?');
  const mapBob = map.set(userBob, 'Hello Bob nice to see you');
  return  user === userBob ? mapBob.get(user) : 
          user === userJane ? mapJane.get(user) :
          'Не коректне значення!';
}
console.log(greetUser(userJane));
console.log(greetUser(userBob));

// 3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.

function transform(dataType) {
if (dataType instanceof Map) {
  return Object.fromEntries(dataType)
}else if (typeof dataType === 'object'){
  return Object.entries(dataType)
}else
  return 'Не коректне значення!'
}
const err = 'Не коректне значення!';
console.log(transform(err));
const obj = { name: 'Sid', gender: 'man' };
console.log(transform(obj));
const map = new Map([['name', 'Sid'], ['gender', 'value2']]);
console.log(transform(map));