// Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'


function setHi(name, time) {
  const timeArray = time.split(' ');
  const timeName = timeArray[1];
  const timeNumber = timeArray[0];

    if (timeName.includes('hour')){
    showSetHi(name,timeNumber * 3600 * 1000);
  } else if  (timeName.includes('minutes')){
    showSetHi(name,timeNumber * 60 * 1000);
  }else if  (timeName.includes('seconds')){
    showSetHi(name,timeNumber * 1000);
  }

}
  
setHi('Max', '5 seconds')

    function showSetHi (name, time){
      setTimeout(()=> {
        console.log(`Hi ${name}`);
      }, time)
    }


// Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан

function asd (text) {
  if (typeof text === 'object') {
    console.log(JSON.stringify(text));
  } else if (typeof text === 'string') {
    console.log(JSON.parse(text));
  }
}
asd('{"name":"Bob","age":18}');
asd({
  name: 'Bob',
  age: 18,
});


// Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку


const falseJson = "некорректный JSON";
try {
    const user = JSON.parse(falseJson);
    console.log(user);
} catch (err) {
  console.log(false);
}

const TrueJson = '{"name":"Bob","age":18}';
try {
    const user = JSON.parse(TrueJson);
    console.log(true);
} catch (err) {
  console.log(false);
}
