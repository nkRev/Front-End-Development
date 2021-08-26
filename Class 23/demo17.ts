
/**
 * export lets us with with another .ts file as long as we import it.
 */

export default class User{
    constructor( public firstName: string, public lastName: string){
        
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

export class A{

}

export class B{

}

class C{

}


// let userObj = new User('nicky', 'kayyarath');
// userObj.getFullName();