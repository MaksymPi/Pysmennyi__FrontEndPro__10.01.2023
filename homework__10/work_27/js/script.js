// Багатоквартирний будинок

// 1. Створити клас Людина.


class Person {
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }
}

// 2. Створити клас Квартира.

class Apartment {
  residents = [];
  GiveResident(residents) {
    this.residents.push(residents);
  }
}


// 3. Створити клас Будинок.


class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }
  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log(
        "Перевищує максимальну кількість квартир!"
      );
    }
  }
}


const vasia = new Person('Vasia', 'men');
const ola = new Person('Ola', 'girl');
const dima = new Person('Dima', 'man');

const apartment1 = new Apartment(vasia);
const apartment2 = new Apartment();

apartment1.GiveResident(vasia);
apartment1.GiveResident(ola);
apartment2.GiveResident(dima);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);


console.log(apartment1.residents);
console.log(apartment2.residents);