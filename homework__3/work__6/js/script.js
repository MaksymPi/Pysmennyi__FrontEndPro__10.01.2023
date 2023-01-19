const firstLine  = prompt ('Введіть перший рядок', 'Front');
const secondLine  = prompt ('Введіть другий рядок', 'End');
const thirdLine  = prompt ('Введіть третій рядок', 'Pro');
alert(firstLine + secondLine + thirdLine);


const number = 12365;
const sNumber = String(number);
console.log(`${sNumber.slice(0, 1)} ${sNumber.slice(1, 2)} ${sNumber.slice(2, 3)} ${sNumber.slice(3, 4)} ${sNumber.slice(4, 5)}`);