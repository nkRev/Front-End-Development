class Calculator {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  addNumber() {
    console.log(this.x + this.y);
  }
}

let calculator = new Calculator(10, 20)
calculator.addNumber() //30
calculator.x = 13
calculator.y = 12
calculator.addNumber() //25