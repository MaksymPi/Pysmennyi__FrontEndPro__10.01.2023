// Вивести на сторінку в один рядок через кому числа від 10 до 20.

// let result = "";
// let n = 20;
// for (let i = 10; i <= n; i++) {
// 	result +=i+(i < n ? "," : "")
// }
// console.log(result); 

// Вивести квадрати чисел від 10 до 20.


// let result = "";
// let n = 20;
// for (let i = 10; i <= n; i++) {
// 	result +=i ** 2 + (i < n ? "," : "");
// }
// console.log(result);



// Вивести таблицю множення на 7.

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log (`7 * ${i} = ${i * 7}`);
// }

// for (let i = 1; i <= 10; i++){
//     console.log (`7 * ${i} = ${i * 7}`);
// }


// Знайти суму всіх цілих чисел від 1 до 15.

// let sum = 0;
// for(let i = 1; i <= 15; i++ ) {
//     sum += i
// }
// console.log(sum);



// Знайти добуток усіх цілих чисел від 15 до 35.

// let mult = 1;
// for(let i = 15; i <= 35; i++ ) {
//     mult = mult * i;
// }
// console.log(mult);



// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let number = 500;
// let result = 0;
// for(let i = 1; i <= number; i++ ) {
//     result +=i /number;
// }
// console.log(result);


// Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let result = 0;
// for(let i = 30; i <= 80; i++ ) {
//     if ( i % 2 == 0  ) {
//         result +=i
//     }
// }
// console.log(result);


// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// let result = "";
// for(let i = 100; i <= 200; i++ ) {
//     if ( i % 3 == 0  ) {
//         result +=i+ ","
//     }
// }
// console.log(result);


// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.



// let n = 100;
 
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         console.log(`Дільники: ${i}`);
//     }
// }



// Визначити кількість його парних дільників.



// let n = 100;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0 && i % 2 === 0) {
// 	result ++
// }
// }
// console.log(result);



// Знайти суму його парних дільників.



// let n = 10;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0 && i % 2 === 0) {
// 	result +=i
// }
// }
// console.log(result);




// Надрукувати повну таблицю множення від 1 до 10.


// let number;
// for (let i = 2; i <= 9; i++){
//     for(j = 1; j <= 10; j++ ) {
//         number = i * j;
//         console.log(`${i} * ${j} =${number} `);
//     }
// }