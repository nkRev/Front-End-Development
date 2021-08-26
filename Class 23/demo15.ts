class Student {
  private id: number;
  private name: string;
  private passMark = 40;
  private _x;

  //we can use getters and setters like java to set name and id
  //     getId(){
  //     return this.id;
  // }

  // setId(value){
  //     if(value < 0)
  //         throw new Error('id can not be negative')
  //     this.id = value;
  // }

  //but ts has a different way to handle that
  get X() {
    return this._x;
  }
  set X(value) {
    if (value < 0) {
      throw new Error("Error");
      this._x = value;
    }
  }

  get Id() {
    return this.id;
  }
  set Id(id) {
    if (id < 0 && id != null) {
      throw new Error("id number cannot be negative or null");
    }
  }
}
let student = new Student();
student.Id = 12
console.log(student)

// student.setId(50)
// console.log(student.getId())

// student.name = null;
// student.passMark = 20;
// console.log(`Id: ${student.id}, Name: ${student.name}, PassMark: ${student.passMark}`);
