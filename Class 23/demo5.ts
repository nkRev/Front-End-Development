function hello(name){
    console.log('hello '+name)
}

hello('nicky')


//Try to use arrow functions more it is apart of ES6
const result = (name)=>'hello '+name;
console.log(result('stacy'))

function addNumber(a, b){
    return a+b
}

const sum = addNumber(200, 500)
console.log(sum)

const sum2 = (num1, num2) => num1+num2
console.log(sum2(9,2))

const employee = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(employee.firstName+employee.lastName)

employee.firstName = 'Nicky'
console.log(employee.firstName)

const sub = (num1, num2) => num1-num2
console.log(sub(10,5))

//returns undefined for some reason
const multi = (num1, num2) => {
    num1 * num2
}
console.log(multi(10, 3))


const sayHello = name => 'Say hello ' +name
console.log(sayHello('nicky'))

//returns undefined for some reason
const sayHello2 = name => {
    'say hello to ' + name
}
console.log(sayHello2('watson'))