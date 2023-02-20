// // 1. Створити сутність "Людина".

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getHumansInfo() {
    console.log(`Name: ${this.name} / Age: ${this.age}.`);
  }
}

// 2. Створити сутність "Автомобіль".

class Car {
  human;
  constructor(brand, model, yearOfRegistration, vin) {
    this.brand = brand;
    this.model = model;
    this.yearOfRegistration = yearOfRegistration;
    this.vin = vin;
  }
  getCarInfo() {
    console.log(
      `Brand: ${this.brand} / Model: ${this.model} / Year of registration: ${this.yearOfRegistration} / VIN: ${this.vin}`
    );
  }
  getHuman(person) {
    if (person.age < 18) {
      console.log("Власник повинен бути старше 18 років");
      return;
    }
    this.human = person;
  }

  showHuman() {
    console.log(`Інформація про власника: ${this.human.name}.`);
  }
}

const alex = new Human("Alex", 19);
const bob = new Human("Bob", 21);
const sofia = new Human("Sofia", 16);

alex.getHumansInfo();
bob.getHumansInfo();
sofia.getHumansInfo();

const skoda = new Car("Skoda", "Fabia", 2003, 6264565375);
const bmw = new Car("BMW", "X5", 2012, 2321333534);
const audi = new Car("Audi", "A5", 2015, 56457575 );

bmw.getCarInfo();
bmw.getHuman(alex);
bmw.showHuman();

skoda.getCarInfo();
skoda.getHuman(bob);
skoda.showHuman();

audi.getCarInfo();
audi.getHuman(sofia);



