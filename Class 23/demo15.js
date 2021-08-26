var Student = /** @class */ (function () {
    function Student() {
        this.passMark = 40;
    }
    Object.defineProperty(Student.prototype, "X", {
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
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Error");
                this._x = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            if (id < 0 && id != null) {
                throw new Error("id number cannot be negative or null");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.Id = 12;
console.log(student);
// student.setId(50)
// console.log(student.getId())
// student.name = null;
// student.passMark = 20;
// console.log(`Id: ${student.id}, Name: ${student.name}, PassMark: ${student.passMark}`);
