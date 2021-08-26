class Student{
    private id: number
    private name: string
    private passMark: 40

    getId(){
        return this.id
    }
    setId(id){
        if(id<0){
            throw new Error('ID cannot be negative')
        }else{
            this.id = id
        }

    }

    getName(){
        return this.name
    }
    setName(name){
        if(name!=null){
            this.name = name
        }
    }
    getPassMark(){
        return this.passMark
    }

}

let student = new Student()
student.setId(12345)
console.log(student.getId())

student.setName('nicky')
console.log(`${student.getId} ${student.getName} ${student.getPassMark}`)