let howManyHours = prompt("Яка кількість годин?");
let howManySeconds = howManyHours * 3600;
if(howManyHours <=1 ) {
    alert(`${howManySeconds} секунд  в ${howManyHours} годині!`);
}else if (howManyHours > 1 ) {
    alert(`${howManySeconds} секунд  в ${howManyHours} годинах!`);
}else{
    alert("Введіть кількість годин!");
}