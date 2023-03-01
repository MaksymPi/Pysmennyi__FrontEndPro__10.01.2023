// Створити масив, довжину та елементи якого задає користувач.

    const NumbersArray = [30, 7, 1, 67, 5,];
    
// Відсортувати масив за зростанням.

    const sortingArray = NumbersArray.sort(( (a, b) => a - b ));
    console.log(sortingArray);

// Видалити елементи з масиву з 2 по 4 (включно!).

    sortingArray.splice(1, 3);
    console.log(sortingArray);