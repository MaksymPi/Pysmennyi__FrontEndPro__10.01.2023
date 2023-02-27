class Hamburger {
  constructor(size, filling){
  this.size = size,
  this.filling = filling,
  this.toppings = []
  } 
  static SIZE_SMALL = {price: 50, calories: 20};
  static SIZE_BIG = {price: 100, calories: 40};
  static STUFFING_CHEESE = {price: 10, calories: 20};
  static STUFFING_SALAD = {price: 20, calories: 5};
  static STUFFING_POTATOES = {price: 15, calories: 10};
  static TOPPING_SAUCE = {price: 15, calories: 0};
  static TOPPING_MAYO = {price: 20, calories: 5};
  
  addTopping(topping) {
    this.toppings.push(topping)
  }

  calculatePrice(){
    let price = this.size.price + this.filling.price;
    for(let topping of this.toppings) {
      price += topping.price;
    }
    return price;
  }
  calculateCalories(){
    let calories = this.size.calories + this.filling.calories;
    for(let topping of this.toppings) {
      calories += topping.calories;
    }
    return calories;
  }

}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculateCalories ()}`);

// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);