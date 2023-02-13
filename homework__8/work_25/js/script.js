
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

function Lamborghini() {
  Car.call(this, 'Lamborghini');

  this.openingDoors = function () {
    console.log('vertical door opening');
  }
}

const DoorsLamborghini = new Lamborghini();
const newCar = new Car('WV');