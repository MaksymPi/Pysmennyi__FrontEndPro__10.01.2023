
// Створити ланцюжок прототипів машина => певна марка машини.
// У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу так і функції пов'язані з маркою 
// машини типу вертикального відкриття дверей Lamborghini.

const сar = {
  goForward () {
    console.log(`Go forward ${this.name}`);
  },
  break () {
    console.log(`Break ${this.name}`);
  }
}

function Brand(name) {
  this.name = name;
}
Brand.prototype = сar;

const Lamborghini = new Brand('Lamborghini')
const Skoda = new Brand("Skoda");

Lamborghini.openingDoors = "vertical door opening";

console.log(Skoda);
console.log(Lamborghini);