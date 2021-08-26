function hello(name) {
    console.log('hello ' + name);
}
hello('nicky');
//Try to use arrow functions more it is apart of ES6
var result = function (name) { return 'hello ' + name; };
console.log(result('stacy'));
function addNumber(a, b) {
    return a + b;
}
var sum = addNumber(200, 500);
console.log(sum);
var sum2 = function (num1, num2) { return num1 + num2; };
console.log(sum2(9, 2));
var employee = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(employee.firstName + employee.lastName);
employee.firstName = 'Nicky';
console.log(employee.firstName);
var sub = function (num1, num2) { return num1 - num2; };
console.log(sub(10, 5));
//returns undefined
var multi = function (num1, num2) {
    num1 * num2;
};
console.log(multi(10, 3));
var sayHello = function (name) { return 'Say hello ' + name; };
console.log(sayHello('nicky'));
//returns undefined
var sayHello2 = function (name) {
    'say hello to ' + name;
};
console.log(sayHello2('watson'));
