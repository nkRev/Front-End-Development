class Employee {
  id;
  firstName;
  lastName;
  email;
  phone;

  getFullName() {
    //console.log(`${this.firstName} ${this.lastName}`)
    console.log(this.firstName, this.lastName);
  }
}

class FullTimeEmployee extends Employee {
  annualSalary;
}

class PartTimeEmployee extends Employee {
  hourlySalary;
}

let fte = new FullTimeEmployee();
fte.firstName = "Nicky";
fte.lastName = "Kay";

let pte = new PartTimeEmployee();
pte.firstName = "Speed";
pte.lastName = "Racer";

fte.getFullName();
pte.getFullName();

class Car {
  test1() {
    console.log(this);
  }

  test2 = () => {
    console.log(this);
  };
}

var car = new Car();
car.test1();
car.test2();
