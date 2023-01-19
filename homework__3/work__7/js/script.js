const whatAction = prompt('Яку дію ви хочете зробити add, sub, mult, div?');
let firstNumber = Number(prompt ("Введіть перше число"));
let secondNumber = Number(prompt("Введіть друге число"));
if (whatAction === 'add') {
    alert(firstNumber + secondNumber);
}else if (whatAction === 'sub') {
    alert(firstNumber - secondNumber);
}else if (whatAction === 'mult') {
    alert(firstNumber * secondNumber);
}else if (whatAction === 'div') {
    alert(firstNumber / secondNumber);
}