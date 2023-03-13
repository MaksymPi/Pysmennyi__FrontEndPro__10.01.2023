// 1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.

function* randomGeneratorNumbers(start, end){
  for( let i = 0; i < 10; i++){
    yield Math.floor(Math.random() * (end - start)) + start;
  }
}
function randomNumber(firstNumber, lastNumber){
  const numbers = randomGeneratorNumbers(firstNumber, lastNumber);
  for (const number of numbers) {
    console.log(number);
  }
}
randomNumber(20, 100)

// 2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)

async function awoke(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('Прокинувся');
}

async function brushTeeth(){
  await awoke();
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log('Почистив зуби');
}

async function breakfast(){
  await brushTeeth();
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log('Поснідав');
}

async function goWork(){
  await breakfast();
  await new Promise(resolve => setTimeout(resolve, 4000))
  console.log('Поїхав на роботу');
}

async function dinner(){
  await goWork();
  await new Promise(resolve => setTimeout(resolve, 5000))
  console.log('Перерва на обід');
}

async function endWork(){
  await dinner();
  await new Promise(resolve => setTimeout(resolve, 6000))
  console.log('Кінець робочого дня');
}

endWork()