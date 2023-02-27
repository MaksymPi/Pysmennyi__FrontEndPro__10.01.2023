class SuperMath {
  constructor() {
    this.X = 0;
    this.Y = 0;
  }
  input() {
    this.X = +prompt('Enter the first number:');
    this.Y = +prompt('Enter the second number:');
    const znak = prompt('(+, -, *, /, %):');

    switch (znak) {
      case '+':
        console.log(`${this.X} + ${this.Y} = ${this.add()}`);
        break;
      case '-':
        console.log(`${this.X} - ${this.Y} = ${this.subtract()}`);
        break;
      case '*':
        console.log(`${this.X} * ${this.Y} = ${this.multiply()}`);
        break;
      case '/':
        console.log(`${this.X} / ${this.Y} = ${this.divide()}`);
        break;
      case '%':
        console.log(`${this.X} % ${this.Y} = ${this.remainder()}`);
        break;
      default:
        console.log('Некорректно введен знак');
        break;
    }
  }

  check(obj) { 
    const value = confirm( 
     `Чи хочете ви виконати саме цю дію ${obj.X} ${obj.znak} ${obj.Y} ?`
   ); 
   if (value === true){
    const result = obj.X / obj.Y
    console.log(`${obj.X} / ${obj.Y} = ${result}`)
    } else if(value === false){
      return this.input()
   }
    }

  add() {
    return this.X + this.Y;
  }

  subtract() {
    return this.X - this.Y;
  }

  multiply() {
    return this.X * this.Y;
  }

  divide() {
    return this.X / this.Y;
  }
  remainder() {
    return this.X % this.Y;
  }
}

const obj = {X: 12, Y: 3, znak: "/" };
const p = new SuperMath ();
p.check(obj);