// 1.Знайти суму та кількість позитивних елементів.

const NumbersArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const positiveArr = NumbersArray.filter(function(number) {
    return number > 0;
});

const result = positiveArr.reduce(function(sum, current) {
    return sum + current
});
console.log(result);
console.log(positiveArr.length);

// 2.Знайти мінімальний елемент масиву та його порядковий номер.

const minimalElementArray = Math.min(...NumbersArray);
console.log(minimalElementArray);
console.log(NumbersArray.indexOf(minimalElementArray) + 1);

// 3.Знайти максимальний елемент масиву та його порядковий номер.

const maxElementArray = Math.max(...NumbersArray);
console.log(maxElementArray);
console.log(NumbersArray.indexOf(maxElementArray) + 1);

// 4.Визначити кількість негативних елементів.

const negativeArr = NumbersArray.filter(function(number) {
    return number < 0;
});
console.log(negativeArr.length);

// 5.Знайти кількість непарних позитивних елементів.

const numberUnpairedPositiveElements = NumbersArray.filter(function(number) {
    return number > 0 && number % 2 !==0;
});
console.log(numberUnpairedPositiveElements.length);

// 6.Знайти кількість парних позитивних елементів.

const numberGuysPositiveElements = NumbersArray.filter(function(number) {
    return number > 0 && number % 2 ===0;
});
console.log(numberGuysPositiveElements.length);

// 7.Знайти суму парних позитивних елементів.

const sumNumberGuysPositiveElements = numberGuysPositiveElements.reduce(function(sum, current) {
    return sum + current
});
console.log(sumNumberGuysPositiveElements);

// 8.Знайти суму непарних позитивних елементів.

const sumNumberUnpairedPositiveElements = numberUnpairedPositiveElements.reduce(function(sum, current) {
    return sum + current
});
console.log(sumNumberUnpairedPositiveElements);

// 9.Знайти добуток позитивних елементів.

const getPositiveArr = positiveArr.reduce(function(sum, current) {
    return sum * current
});
console.log(getPositiveArr);

// 10.Знайти найбільший серед елементів масиву, остальні обнулити.

const powArray = NumbersArray.map((number) => {
    if(number < maxElementArray){
        return 0
    } else 
        return maxElementArray
    
});
console.log(powArray);