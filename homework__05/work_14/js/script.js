// 1.Створіть масив елементів (Наприклад: ["apple", "carrot", "pear", "celery"]).

    const fruitsArray = ['apple', 'pear', 'orange','grapefruit'];

// 2.Виведіть послідовно кожен елемент масиву з допомогою forEach().

    fruitsArray.forEach(element => {
        console.log(element);
    })
// 3.Виведіть послідовно кожен елемент масиву з допомогою for ... of.

    for ( let fruit of fruitsArray) {
        console.log(fruit);
    }
