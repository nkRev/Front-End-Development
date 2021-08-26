var Calculator = /** @class */ (function () {
    function Calculator(x, y) {
        this.x = x;
        this.y = y;
    }
    Calculator.prototype.addNumber = function () {
        console.log(this.x + this.y);
    };
    return Calculator;
}());
var calculator = new Calculator(10, 20);
calculator.addNumber();
calculator.x = 13;
calculator.y = 12;
calculator.addNumber();
