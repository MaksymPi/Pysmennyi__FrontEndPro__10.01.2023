// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.


function generateKey(length, characters) {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const key = Math.floor(Math.random() * characters.length);
    randomString += characters[key];
  }
  return randomString;
}

console.log(generateKey(10, 'abcdefghijklmnopqrstuvwxyz0123456789'));