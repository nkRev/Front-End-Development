const employee = {
    firstName : 'nicky',
    lastName : 'kayyarath',
    getFullName : function(){
        console.log(this)
        return this.firstName + ' ' + this.lastName
    }
}

employee.getFullName();