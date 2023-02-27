// Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано

function timeSeconds (unixTime) {
  const passedNumber = new Date(unixTime);
  const todayNumber = new Date();
  return passedNumber.getDate() === todayNumber.getDate() ? true : false;
}
console.log(timeSeconds(1677096770000)); 

// Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

function addLeadingZero(d) {
  return (d < 10) ? '0' + d : d;
}

function dataAndTime(unixTime) {
   const Y = unixTime.getFullYear();
   const M = addLeadingZero(unixTime.getMonth()+1);
   const D = addLeadingZero(unixTime.getDate()+1);
   const h = addLeadingZero(unixTime.getHours());
   const m = addLeadingZero(unixTime.getMinutes());

   return `${D}.${M}.${Y} ${h}:${m}`
}

console.log(dataAndTime(new Date(1677049970000)));


// Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.

function time(unixTime) {
  const timeNow = new Date();
  const givenTime = new Date(unixTime);
  const D = timeNow.getDate() - givenTime.getDate()
  const h = addLeadingZero(timeNow.getHours() - givenTime.getHours())
  const m = addLeadingZero(timeNow.getMinutes() - givenTime.getMinutes())
  return `
Днів ${D}
Годин ${h}:${m}`
}

console.log(time(	1777094819000)); 