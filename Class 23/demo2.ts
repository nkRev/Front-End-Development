var a = 100
console.log(a) //100

{
    //let is block scoped, meaning variables are only available within the block
    let a =500
    console.log(a) //500
}

console.log(a) //100