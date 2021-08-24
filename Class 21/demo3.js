function doSomething(){
    //let i is only available in the scope of this for loop
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
doSomething()