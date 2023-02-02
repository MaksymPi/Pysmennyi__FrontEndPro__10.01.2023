    // Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
  console.log(arr.filter(el => el !== item));
}
removeElement(array, 5);