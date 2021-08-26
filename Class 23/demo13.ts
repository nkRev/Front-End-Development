class Employee{
    public id: number
    public firstName: string
    public lastName: string
    public email: string

    public getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }

}

class FullTimeEmployee extends Employee{
    public annualSalary: number
}

class PartTimeEmployee extends Employee{
    public hourly: number
}

let fte = new FullTimeEmployee()
fte.firstName = 'Nicky'
fte.lastName = 'Kayyarath'

let pte = new PartTimeEmployee()
pte.firstName = 'Robert'
pte.lastName = 'Paulson'

fte.getFullName()
pte.getFullName()