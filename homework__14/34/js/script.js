const wakeUp = () => {
  return new Promise((resolve, reject) => {
      const wakeUp = true;
      if(wakeUp){
       resolve('5:30 Прокинувся');
      } else {
       reject('Не прокинувся');
      }
});
}

const brushTeeth = () => {
  return new Promise((resolve, reject) => {
    const BrushTeeth = true;
    if (BrushTeeth) {
      resolve('5:40 Прийняв душ');
    } else {
      reject('Я не прийняв душ');
    }
  });
};

const Breakfast = () => {
  return new Promise((resolve, reject) => {
    const Breakfast = true;
    if (Breakfast) {
      resolve('6:00 Приготував та з\'їв сніданок');
    } else {
      reject('Я не приготував сніданок');
    }
  });
};

const goToWork = () => {
  return new Promise((resolve, reject) => {
    const goToWork = true;
    if (goToWork) {
      resolve('7:30 Поїхав до роботи');
    } else {
      reject('Я не приїхав до роботи');
    }
  });
};  
const Dinner = () => {
  return new Promise((resolve, reject) => {
    const Dinner  = true;
    if (Dinner) {
      resolve('14:00 Пішов на обід');
    } else {
      reject('Я не пішов на обід');
    }
  });
};

wakeUp()
  .then((message) => {
    console.log(message);
    return brushTeeth();
  })
  .then((message) => {
    console.log(message);
    return Breakfast();
  })
  .then((message) => {
      console.log(message);
      return goToWork();
    })
  .then((message) => {
      console.log(message);
      return Dinner();
    })
  .then((message) => {
    console.log(message);
    console.log('17:00 Кінець робочого дня');
  })
  .catch((error) => {
    console.log(error);
  });
