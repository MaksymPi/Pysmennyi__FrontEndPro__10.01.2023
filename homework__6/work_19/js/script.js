// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:﻿sum(3) = 3,sum(5) = 8,sum(20) = 28

function createSum(){
  let count = 0;
  return function (n) {
      count += n;
      console.log(count);
  }
}
let step = createSum();
step(3)
step(5)
step(20)