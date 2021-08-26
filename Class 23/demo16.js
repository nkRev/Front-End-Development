var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.setId = function (id) {
        if (id < 0) {
            throw new Error('ID cannot be negative');
        }
        else {
            this.id = id;
        }
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        if (name != null) {
            this.name = name;
        }
    };
    Student.prototype.getPassMark = function () {
        return this.passMark;
    };
    return Student;
}());
var student = new Student();
student.setId(12345);
console.log(student.getId());
student.setName('nicky');
console.log(student.getId + " " + student.getName + " " + student.getPassMark);
