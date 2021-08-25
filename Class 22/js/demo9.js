function print(data){
    document.getElementById('result').innerHTML  = data
}

let myPromise = new Promise(function(resolve, reject){
    let a = 200
    if(a==100){
        resolve('OK')
    }else{
        reject('error')
    }
})


myPromise
.then(function(value){
    print(value)
})
.catch(function(error){
    print(error)
})