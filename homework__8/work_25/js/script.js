
// Створити ланцюжок прототипів машина => певна марка машини.
// У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу так і функції пов'язані з маркою 
// машини типу вертикального відкриття дверей Lamborghini.

function Car(carName) {
  this.carName = carName;

  this.goForward = function () {
    console.log(`Go forward ${this.carName}`);
  }

  this.break = function () {
    console.log(`Break ${this.carName}`);
  }
}

function CarLamborghini() {
  Car.call(this, 'Lamborghini');

  this.openingDoors = function () {
    console.log('vertical door opening');
  }
}

const Lamborghini = new CarLamborghini();
const Skoda = new Car('Skoda');
console.log(Lamborghini);
console.log(Skoda);