function printResOne(data){
    document.getElementById('res1').innerHTML=data
}

function printResTwo(data){
    document.getElementById('res2').innerHTML = data
}

function hello(name, callback){
    let message = 'hello ' + name;
    callback(message)
}

hello('nicky', printResTwo)
hello('stacy', printResOne)